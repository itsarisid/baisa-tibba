// AUTO-GENERATED — Leave Management Module - Balances
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleBalancesApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets my leave balances. */
  async getMyLeaveBalances(params?: { year?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/balances/me`, { params });
    return res.data;
  }

  /** Gets another user's leave balances. */
  async getUserLeaveBalances(userId: string, params?: { year?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/balances/users/${userId}`, { params });
    return res.data;
  }

  /** Initializes leave balances. */
  async initializeLeaveBalances(data: T.InitializeLeaveBalanceRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/balances/initialize`, data);
    return res.data;
  }

  /** Adjusts a leave balance. */
  async adjustLeaveBalance(data: T.AdjustLeaveBalanceRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/balances/adjust`, data);
    return res.data;
  }
}
