let _isNative = false;
let _platform: 'web' | 'ios' | 'android' = 'web';

try {
	const { Capacitor } = await import('@capacitor/core');
	_isNative = Capacitor.isNativePlatform();
	_platform = Capacitor.getPlatform() as 'web' | 'ios' | 'android';
} catch {
	// Running in web-only mode
}

export const isNative = _isNative;
export const platform = _platform;
export const isIOS = _platform === 'ios';
export const isAndroid = _platform === 'android';
export const isWeb = _platform === 'web';
