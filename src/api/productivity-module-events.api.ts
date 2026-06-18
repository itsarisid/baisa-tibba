// AUTO-GENERATED — Productivity Module - Events
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleEventsApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a calendar event. */
  async createEvent(data: T.CreateEventRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/events`, data);
    return res.data;
  }

  /** Gets a calendar view. */
  async getCalendarView(params?: { view?: string; date?: string; start?: string; end?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/events/calendar`, { params });
    return res.data;
  }

  /** Checks attendee availability. */
  async checkAvailability(data: T.CheckAvailabilityRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/events/availability`, data);
    return res.data;
  }

  /** Responds to an invitation. */
  async respondToEvent(eventId: string, data: T.RespondToEventRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/events/${eventId}/respond`, data);
    return res.data;
  }

  /** Exports calendar data to iCal. */
  async exportCalendarIcal(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/events/export/ical`);
    return res.data;
  }

  /** Suggests meeting times. */
  async suggestMeetingTimes(data: T.SuggestMeetingTimesRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/events/suggest-times`, data);
    return res.data;
  }
}
