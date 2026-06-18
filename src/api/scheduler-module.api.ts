// AUTO-GENERATED — Scheduler Module
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class SchedulerModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a scheduler job. */
  async createSchedulerJob(data: T.CreateSchedulerJobRequest): Promise<T.JobDto> {
    const res = await this.client.post<T.JobDto>(`/api/v1/scheduler/jobs`, data);
    return res.data;
  }

  /** Gets scheduler jobs. */
  async getSchedulerJobs(params?: { pageNumber?: number; pageSize?: number; jobType?: T.JobType; status?: string; tag?: string; search?: string; sortBy?: string; sortDirection?: string }): Promise<T.JobDtoPagedResponseDto> {
    const res = await this.client.get<T.JobDtoPagedResponseDto>(`/api/v1/scheduler/jobs`, { params });
    return res.data;
  }

  /** Gets a scheduler job by id. */
  async getSchedulerJobById(jobId: string): Promise<T.JobDto> {
    const res = await this.client.get<T.JobDto>(`/api/v1/scheduler/jobs/${jobId}`);
    return res.data;
  }

  /** Updates a scheduler job. */
  async updateSchedulerJob(jobId: string, data: T.UpdateSchedulerJobRequest): Promise<T.JobDto> {
    const res = await this.client.put<T.JobDto>(`/api/v1/scheduler/jobs/${jobId}`, data);
    return res.data;
  }

  /** Deletes a scheduler job. */
  async deleteSchedulerJob(jobId: string, params?: { hardDelete?: boolean }): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/scheduler/jobs/${jobId}`, { params });
    return res.data;
  }

  /** Reschedules a scheduler job. */
  async rescheduleSchedulerJob(jobId: string, data: T.RescheduleSchedulerJobRequest): Promise<T.JobDto> {
    const res = await this.client.patch<T.JobDto>(`/api/v1/scheduler/jobs/${jobId}/reschedule`, data);
    return res.data;
  }

  /** Pauses a scheduler job. */
  async pauseSchedulerJob(jobId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/jobs/${jobId}/pause`);
    return res.data;
  }

  /** Resumes a scheduler job. */
  async resumeSchedulerJob(jobId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/jobs/${jobId}/resume`);
    return res.data;
  }

  /** Triggers a job immediately. */
  async triggerSchedulerJob(jobId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/jobs/${jobId}/trigger`);
    return res.data;
  }

  /** Gets executions for a job. */
  async getSchedulerJobExecutions(jobId: string, params?: { pageNumber?: number; pageSize?: number; status?: T.ExecutionStatus; fromDate?: string; toDate?: string }): Promise<T.JobExecutionDtoPagedResponseDto> {
    const res = await this.client.get<T.JobExecutionDtoPagedResponseDto>(`/api/v1/scheduler/jobs/${jobId}/executions`, { params });
    return res.data;
  }

  /** Gets execution details. */
  async getSchedulerExecutionDetails(executionId: string): Promise<T.JobExecutionDto> {
    const res = await this.client.get<T.JobExecutionDto>(`/api/v1/scheduler/executions/${executionId}`);
    return res.data;
  }

  /** Cancels a running execution. */
  async cancelSchedulerExecution(executionId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/executions/${executionId}/cancel`);
    return res.data;
  }

  /** Retries a failed execution. */
  async retrySchedulerExecution(executionId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/executions/${executionId}/retry`);
    return res.data;
  }

  /** Adds exclusion rules to a job. */
  async addSchedulerJobExclusions(jobId: string, data: T.AddJobExclusionRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/jobs/${jobId}/exclusions`, data);
    return res.data;
  }

  /** Adds dependency rules to a job. */
  async addSchedulerJobDependencies(jobId: string, data: T.AddJobDependencyRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/jobs/${jobId}/dependencies`, data);
    return res.data;
  }

  /** Creates a scheduler workflow definition. */
  async createSchedulerWorkflow(data: T.CreateWorkflowRequest): Promise<string> {
    const res = await this.client.post<string>(`/api/v1/scheduler/workflows`, data);
    return res.data;
  }

  /** Gets dashboard statistics. */
  async getSchedulerDashboardStats(): Promise<T.DashboardStatsDto> {
    const res = await this.client.get<T.DashboardStatsDto>(`/api/v1/scheduler/dashboard/stats`);
    return res.data;
  }

  /** Gets jobs with repeated failures. */
  async getSchedulerFailedJobs(params?: { threshold?: number }): Promise<Array<T.JobDto>> {
    const res = await this.client.get<Array<T.JobDto>>(`/api/v1/scheduler/jobs/failed`, { params });
    return res.data;
  }

  /** Gets execution timeline data. */
  async getSchedulerExecutionTimeline(params?: { hours?: number }): Promise<Array<T.TimelinePointDto>> {
    const res = await this.client.get<Array<T.TimelinePointDto>>(`/api/v1/scheduler/executions/timeline`, { params });
    return res.data;
  }

  /** Pauses all jobs. */
  async pauseAllSchedulerJobs(): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/admin/pause-all`);
    return res.data;
  }

  /** Resumes all jobs. */
  async resumeAllSchedulerJobs(): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/scheduler/admin/resume-all`);
    return res.data;
  }

  /** Clears old execution logs. */
  async clearSchedulerExecutionLogs(data: T.ClearExecutionLogsRequest): Promise<number> {
    const res = await this.client.delete<number>(`/api/v1/scheduler/admin/clear-logs`);
    return res.data;
  }

  /** Exports job configurations. */
  async exportSchedulerJobs(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/scheduler/admin/export`);
    return res.data;
  }

  /** Imports job configurations. */
  async importSchedulerJobs(data: T.ImportSchedulerJobsRequest): Promise<number> {
    const res = await this.client.post<number>(`/api/v1/scheduler/admin/import`, data);
    return res.data;
  }
}
