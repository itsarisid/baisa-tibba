// AUTO-GENERATED — Leave Management Module - Administration
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleAdministrationApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets approval chains. */
  async getLeaveApprovalChains(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/admin/approval-chains`);
    return res.data;
  }

  /** Creates an approval chain. */
  async createLeaveApprovalChain(data: T.CreateApprovalChainRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/admin/approval-chains`, data);
    return res.data;
  }

  /** Creates a public holiday. */
  async createPublicHoliday(data: T.CreatePublicHolidayRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/admin/holidays`, data);
    return res.data;
  }

  /** Creates a blackout period. */
  async createLeaveBlackoutPeriod(data: T.CreateBlackoutPeriodRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/admin/blackout-periods`, data);
    return res.data;
  }

  /** Creates an accrual rule. */
  async createLeaveAccrualRule(data: T.CreateAccrualRuleRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/admin/accrual-rules`, data);
    return res.data;
  }

  /** Runs leave accrual. */
  async runLeaveAccrual(params?: { year?: number; reason?: string }): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/leave/admin/accrual/run`, undefined, { params });
    return res.data;
  }

  /** Gets leave audit logs. */
  async getLeaveAuditLogs(params?: { userId?: string; requestId?: string; fromDate?: string; toDate?: string; take?: number; skip?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/admin/audit`, { params });
    return res.data;
  }

  /** Gets leave report summary. */
  async getLeaveReportSummary(params?: { fromDate?: string; toDate?: string; userId?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/admin/reports/summary`, { params });
    return res.data;
  }
}
