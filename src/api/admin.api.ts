// AUTO-GENERATED — Admin
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class AdminApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a new user account. */
  async adminCreateUser(data: T.AdminCreateUserRequest): Promise<T.UserDto> {
    const res = await this.client.post<T.UserDto>(`/api/v1/admin/users`, data);
    return res.data;
  }

  /** Lists all users. */
  async adminGetUsers(): Promise<Array<T.UserDto>> {
    const res = await this.client.get<Array<T.UserDto>>(`/api/v1/admin/users`);
    return res.data;
  }

  /** Gets detailed information for a single user. */
  async adminGetUserById(userId: string): Promise<T.AdminUserDetailDto> {
    const res = await this.client.get<T.AdminUserDetailDto>(`/api/v1/admin/users/${userId}`);
    return res.data;
  }

  /** Locks a user account. */
  async adminLockUser(userId: string, data?: T.AdminLockUserRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/users/${userId}/lock`, data);
    return res.data;
  }

  /** Unlocks a previously locked account. */
  async adminUnlockUser(userId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/users/${userId}/unlock`);
    return res.data;
  }

  /** Resets a user's password without the old password. */
  async adminResetPassword(userId: string, data: T.AdminResetPasswordRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/users/${userId}/reset-password`, data);
    return res.data;
  }

  /** Sends a password reset link to the user. */
  async adminSendResetLink(userId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/users/${userId}/send-reset-link`);
    return res.data;
  }

  /** Forces a user to sign out everywhere. */
  async adminForceLogout(userId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/users/${userId}/force-logout`);
    return res.data;
  }

  /** Gets the user's activity and audit history. */
  async adminGetUserAuditLogs(userId: string, params?: { take?: string; skip?: string }): Promise<Array<T.AuditLogDto>> {
    const res = await this.client.get<Array<T.AuditLogDto>>(`/api/v1/admin/users/${userId}/audit-logs`, { params });
    return res.data;
  }
}
