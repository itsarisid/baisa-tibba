// AUTO-GENERATED — Identity Module
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class IdentityModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Registers a new user account. */
  async registerUser(data: T.RegisterCommand): Promise<T.UserDto> {
    const res = await this.client.post<T.UserDto>(`/api/v1/auth/register`, data);
    return res.data;
  }

  /** Confirms a user's email address. */
  async confirmEmail(data: T.ConfirmEmailCommand): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/confirm-email`, data);
    return res.data;
  }

  /** Authenticates a user. */
  async login(data: T.LoginRequest): Promise<T.AuthResponseDto> {
    const res = await this.client.post<T.AuthResponseDto>(`/api/v1/auth/login`, data);
    return res.data;
  }

  /** Starts the forgot-password flow. */
  async forgotPassword(data: T.ForgotPasswordCommand): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/forgot-password`, data);
    return res.data;
  }

  /** Completes the password reset flow. */
  async resetPassword(data: T.ResetPasswordCommand): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/reset-password`, data);
    return res.data;
  }

  /** Refreshes an expired or expiring access token. */
  async refreshToken(data: T.RefreshTokenRequest): Promise<T.AuthResponseDto> {
    const res = await this.client.post<T.AuthResponseDto>(`/api/v1/auth/refresh-token`, data);
    return res.data;
  }

  /** Signs the current user out. */
  async logout(data: T.LogoutRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/logout`, data);
    return res.data;
  }

  /** Changes the current user's password. */
  async changePassword(data: T.ChangePasswordCommand): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/change-password`, data);
    return res.data;
  }

  /** Starts authenticator-app MFA enrollment. */
  async enableAuthenticator(): Promise<T.AuthenticatorSetupDto> {
    const res = await this.client.post<T.AuthenticatorSetupDto>(`/api/v1/auth/mfa/enable-authenticator`);
    return res.data;
  }

  /** Completes authenticator-app MFA enrollment. */
  async verifyAuthenticator(data: T.VerifyAuthenticatorCommand): Promise<T.RecoveryCodesDto> {
    const res = await this.client.post<T.RecoveryCodesDto>(`/api/v1/auth/mfa/verify-authenticator`, data);
    return res.data;
  }

  /** Enables OTP-based MFA delivery. */
  async enableOtp(data: T.EnableOtpCommand): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/mfa/enable-otp`, data);
    return res.data;
  }

  /** Verifies an OTP code. */
  async verifyOtp(data: T.VerifyOtpCommand): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/auth/mfa/verify-otp`, data);
    return res.data;
  }

  /** Completes sign-in after MFA challenge. */
  async mfaLogin(data: T.MfaLoginRequest): Promise<T.AuthResponseDto> {
    const res = await this.client.post<T.AuthResponseDto>(`/api/v1/auth/mfa/login`, data);
    return res.data;
  }

  /** Gets the currently authenticated user. */
  async getCurrentUser(): Promise<T.CurrentUserDto> {
    const res = await this.client.get<T.CurrentUserDto>(`/api/v1/auth/me`);
    return res.data;
  }

  /** Gets current MFA recovery codes. */
  async getRecoveryCodes(): Promise<T.RecoveryCodesDto> {
    const res = await this.client.get<T.RecoveryCodesDto>(`/api/v1/auth/mfa/recovery-codes`);
    return res.data;
  }

  /** Regenerates MFA recovery codes. */
  async regenerateRecoveryCodes(): Promise<T.RecoveryCodesDto> {
    const res = await this.client.post<T.RecoveryCodesDto>(`/api/v1/auth/mfa/recovery-codes/regenerate`);
    return res.data;
  }
}
