export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  state: string;
  subscriptionTier: 'free' | 'essential' | 'pro';
  subscriptionExpiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  state: string;
  phone?: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}
