const DB_NAME = 'legalpath-offline';
const STORE_NAME = 'operations';
const DB_VERSION = 1;

interface QueuedOp {
	id: string;
	method: string;
	url: string;
	body?: string;
	createdAt: string;
}

function openDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onupgradeneeded = () => {
			const db = request.result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME, { keyPath: 'id' });
			}
		};
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}

export async function enqueueOperation(op: Omit<QueuedOp, 'id' | 'createdAt'>): Promise<string> {
	const db = await openDB();
	const id = crypto.randomUUID();
	const entry: QueuedOp = { ...op, id, createdAt: new Date().toISOString() };
	return new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, 'readwrite');
		tx.objectStore(STORE_NAME).add(entry);
		tx.oncomplete = () => resolve(id);
		tx.onerror = () => reject(tx.error);
	});
}

export async function dequeueOperation(id: string): Promise<void> {
	const db = await openDB();
	return new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, 'readwrite');
		tx.objectStore(STORE_NAME).delete(id);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
}

export async function getAllOperations(): Promise<QueuedOp[]> {
	const db = await openDB();
	return new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, 'readonly');
		const request = tx.objectStore(STORE_NAME).getAll();
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}

export async function clearOperations(): Promise<void> {
	const db = await openDB();
	return new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, 'readwrite');
		tx.objectStore(STORE_NAME).clear();
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
}
