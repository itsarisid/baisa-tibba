// AUTO-GENERATED — Leave Management Module - Calendar
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class LeaveManagementModuleCalendarApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets leave calendar data. */
  async getLeaveCalendar(params?: { fromDate?: string; toDate?: string; userId?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/calendar`, { params });
    return res.data;
  }

  /** Gets public holidays. */
  async getPublicHolidays(params?: { fromDate?: string; toDate?: string; country?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/leave/calendar/holidays`, { params });
    return res.data;
  }
}
