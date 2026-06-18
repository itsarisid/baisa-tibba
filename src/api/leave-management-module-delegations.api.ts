// AUTO-GENERATED — Leave Management Module - Delegations
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleDelegationsApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets leave delegations. */
  async getLeaveDelegations(userId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/delegations/users/${userId}`);
    return res.data;
  }

  /** Creates approval delegation. */
  async createLeaveDelegation(data: T.CreateDelegationRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/delegations`, data);
    return res.data;
  }

  /** Revokes approval delegation. */
  async revokeLeaveDelegation(delegationId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/delegations/${delegationId}/revoke`);
    return res.data;
  }
}
