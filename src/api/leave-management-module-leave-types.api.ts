// AUTO-GENERATED — Leave Management Module - Leave Types
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleLeaveTypesApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets configured leave types. */
  async getLeaveTypes(params?: { isActive?: boolean; isPaid?: boolean; applicableToRole?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/types`, { params });
    return res.data;
  }

  /** Creates a leave type. */
  async createLeaveType(data: T.CreateLeaveTypeRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/types`, data);
    return res.data;
  }

  /** Updates a leave type. */
  async updateLeaveType(leaveTypeId: string, data: T.UpdateLeaveTypeRequest): Promise<void> {
    const res = await this.client.put<void>(`/api/v1/leave/types/${leaveTypeId}`, data);
    return res.data;
  }

  /** Deactivates a leave type. */
  async deactivateLeaveType(leaveTypeId: string): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/leave/types/${leaveTypeId}`);
    return res.data;
  }
}
