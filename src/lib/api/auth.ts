import { api } from './client';
import type { User, LoginRequest, RegisterRequest } from '$lib/types/user';

interface AuthResponse {
	user: User;
	accessToken: string;
	refreshToken: string;
}

export function login(data: LoginRequest): Promise<AuthResponse> {
	return api.post('/api/auth/login', data);
}

export function register(data: RegisterRequest): Promise<AuthResponse> {
	return api.post('/api/auth/register', data);
}

export function refreshToken(token: string): Promise<{ accessToken: string; refreshToken: string }> {
	return api.post('/api/auth/refresh', { refreshToken: token });
}

export function forgotPassword(email: string): Promise<{ message: string }> {
	return api.post('/api/auth/forgot-password', { email });
}

export function resetPassword(token: string, password: string): Promise<{ message: string }> {
	return api.post('/api/auth/reset-password', { token, password });
}

export function getProfile(): Promise<User> {
	return api.get('/api/auth/profile');
}
