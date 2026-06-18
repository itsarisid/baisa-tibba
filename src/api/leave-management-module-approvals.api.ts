// AUTO-GENERATED — Leave Management Module - Approvals
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleApprovalsApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets pending approvals. */
  async getPendingLeaveApprovals(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/approvals/pending`);
    return res.data;
  }

  /** Approves a leave request. */
  async approveLeaveRequest(requestId: string, data: T.ApprovalDecisionRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/approvals/${requestId}/approve`, data);
    return res.data;
  }

  /** Rejects a leave request. */
  async rejectLeaveRequest(requestId: string, data: T.RejectLeaveRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/approvals/${requestId}/reject`, data);
    return res.data;
  }

  /** Requests leave request changes. */
  async requestLeaveChanges(requestId: string, data: T.RequestChangesRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/approvals/${requestId}/changes`, data);
    return res.data;
  }

  /** Processes approvals in batch. */
  async batchLeaveApproval(data: T.BatchApprovalRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/approvals/batch`, data);
    return res.data;
  }

  /** Gets approval history. */
  async getLeaveApprovalHistory(requestId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/approvals/${requestId}/history`);
    return res.data;
  }
}
