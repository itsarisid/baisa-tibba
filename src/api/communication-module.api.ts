// AUTO-GENERATED — Communication Module
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class CommunicationModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Sends a message through one or more configured channels. */
  async sendCommunication(data: T.SendCommunicationCommand): Promise<T.CommunicationBatchResponseDto> {
    const res = await this.client.post<T.CommunicationBatchResponseDto>(`/api/v1/communications/send`, data);
    return res.data;
  }

  /** Gets the active communication module configuration. */
  async getCommunicationConfiguration(): Promise<T.CommunicationConfigurationDto> {
    const res = await this.client.get<T.CommunicationConfigurationDto>(`/api/v1/communications/configuration`);
    return res.data;
  }
}
