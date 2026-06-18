// AUTO-GENERATED — Leave Management Module - Requests
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleRequestsApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Submits a leave request. */
  async submitLeaveRequest(data: T.SubmitLeaveRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/requests`, data);
    return res.data;
  }

  /** Searches leave requests. */
  async searchLeaveRequests(params?: { userId?: string; status?: string; fromDate?: string; toDate?: string; page?: number; pageSize?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/requests`, { params });
    return res.data;
  }

  /** Gets a leave request. */
  async getLeaveRequestById(requestId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/requests/${requestId}`);
    return res.data;
  }

  /** Modifies a leave request. */
  async modifyLeaveRequest(requestId: string, data: T.ModifyLeaveRequest): Promise<void> {
    const res = await this.client.put<void>(`/api/v1/leave/requests/${requestId}`, data);
    return res.data;
  }

  /** Cancels a leave request. */
  async cancelLeaveRequest(requestId: string, data: T.CancelLeaveRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/requests/${requestId}/cancel`, data);
    return res.data;
  }

  /** Withdraws a pending leave request. */
  async withdrawLeaveRequest(requestId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/requests/${requestId}/withdraw`);
    return res.data;
  }
}
