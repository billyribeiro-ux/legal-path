export interface ValidationResult {
	valid: boolean;
	error?: string;
}

export function required(value: string, fieldName = 'This field'): ValidationResult {
	if (!value || value.trim().length === 0) {
		return { valid: false, error: `${fieldName} is required` };
	}
	return { valid: true };
}

export function email(value: string): ValidationResult {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!re.test(value)) {
		return { valid: false, error: 'Please enter a valid email address' };
	}
	return { valid: true };
}

export function minLength(value: string, min: number, fieldName = 'This field'): ValidationResult {
	if (value.length < min) {
		return { valid: false, error: `${fieldName} must be at least ${min} characters` };
	}
	return { valid: true };
}

export function maxLength(value: string, max: number, fieldName = 'This field'): ValidationResult {
	if (value.length > max) {
		return { valid: false, error: `${fieldName} must be at most ${max} characters` };
	}
	return { valid: true };
}

export function phone(value: string): ValidationResult {
	const re = /^\+?[\d\s\-().]{7,}$/;
	if (!re.test(value)) {
		return { valid: false, error: 'Please enter a valid phone number' };
	}
	return { valid: true };
}

export function date(value: string): ValidationResult {
	const d = new Date(value);
	if (isNaN(d.getTime())) {
		return { valid: false, error: 'Please enter a valid date' };
	}
	return { valid: true };
}

export function pastDate(value: string): ValidationResult {
	const d = new Date(value);
	if (isNaN(d.getTime())) {
		return { valid: false, error: 'Please enter a valid date' };
	}
	if (d > new Date()) {
		return { valid: false, error: 'Date must be in the past' };
	}
	return { valid: true };
}

export function validate(
	value: string,
	...validators: ((v: string) => ValidationResult)[]
): ValidationResult {
	for (const validator of validators) {
		const result = validator(value);
		if (!result.valid) return result;
	}
	return { valid: true };
}
