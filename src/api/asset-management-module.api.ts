// AUTO-GENERATED — Asset Management Module
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class AssetManagementModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a new asset. */
  async createAsset(data: T.CreateAssetRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets`, data);
    return res.data;
  }

  /** Gets a filtered and paginated asset list. */
  async getAssets(params?: { status?: string; categoryId?: string; locationId?: string; assignedToUserId?: string; search?: string; purchaseDateFrom?: string; purchaseDateTo?: string; costMin?: number; costMax?: number; condition?: string; warrantyExpiringInDays?: number; includeRetired?: boolean; sortBy?: string; sortDirection?: string; page?: number; pageSize?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets`, { params });
    return res.data;
  }

  /** Gets a single asset with full details. */
  async getAssetById(assetId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets/${assetId}`);
    return res.data;
  }

  /** Updates an existing asset. */
  async updateAsset(assetId: string, data: T.UpdateAssetRequest): Promise<void> {
    const res = await this.client.put<void>(`/api/v1/assets/${assetId}`, data);
    return res.data;
  }

  /** Soft deletes an asset by retiring or disposing it. */
  async retireAsset(assetId: string, data: T.RetireAssetRequest): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/assets/${assetId}`);
    return res.data;
  }

  /** Moves an asset to a new location. */
  async moveAsset(assetId: string, data: T.MoveAssetRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets/${assetId}/move`, data);
    return res.data;
  }

  /** Assigns an asset to a user. */
  async assignAsset(assetId: string, data: T.AssignAssetRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets/${assetId}/assign`, data);
    return res.data;
  }

  /** Returns an assigned asset. */
  async unassignAsset(assetId: string, data: T.UnassignAssetRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets/${assetId}/unassign`, data);
    return res.data;
  }

  /** Transfers an assignment between users. */
  async transferAsset(assetId: string, data: T.TransferAssetRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets/${assetId}/transfer`, data);
    return res.data;
  }

  /** Gets assignment history for an asset. */
  async getAssetAssignments(assetId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets/${assetId}/assignments`);
    return res.data;
  }

  /** Schedules maintenance for an asset. */
  async scheduleAssetMaintenance(assetId: string, data: T.ScheduleMaintenanceRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets/${assetId}/maintenance`, data);
    return res.data;
  }

  /** Gets maintenance history for an asset. */
  async getAssetMaintenanceHistory(assetId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets/${assetId}/maintenance`);
    return res.data;
  }

  /** Completes a maintenance record. */
  async completeAssetMaintenance(assetId: string, maintenanceId: string, data: T.CompleteMaintenanceRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/assets/${assetId}/maintenance/${maintenanceId}/complete`, data);
    return res.data;
  }

  /** Calculates depreciation for an asset. */
  async getAssetDepreciation(assetId: string, params?: { asOfDate?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets/${assetId}/depreciation`, { params });
    return res.data;
  }

  /** Gets the activity timeline for an asset. */
  async getAssetActivity(assetId: string, params?: { action?: string; fromDate?: string; toDate?: string; userId?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets/${assetId}/activity`, { params });
    return res.data;
  }

  /** Scans an asset by barcode or QR payload. */
  async scanAsset(params?: { barcode?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/assets/scan`, { params });
    return res.data;
  }

  /** Creates a category in the asset hierarchy. */
  async createAssetCategory(data: T.CreateAssetCategoryRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/asset-categories`, data);
    return res.data;
  }

  /** Gets the asset category hierarchy. */
  async getAssetCategoryTree(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/asset-categories/tree`);
    return res.data;
  }

  /** Creates a location used by the asset module. */
  async createAssetLocation(data: T.CreateLocationRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/locations`, data);
    return res.data;
  }

  /** Creates an asset workflow definition. */
  async createAssetWorkflowDefinition(data: T.CreateWorkflowDefinitionRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/workflows`, data);
    return res.data;
  }

  /** Starts a workflow for an asset. */
  async startAssetWorkflow(assetId: string, data: T.StartWorkflowRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/workflows/assets/${assetId}/start`, data);
    return res.data;
  }

  /** Gets a workflow instance. */
  async getAssetWorkflowInstance(instanceId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/workflows/instances/${instanceId}`);
    return res.data;
  }

  /** Applies an action to the current workflow step. */
  async actOnAssetWorkflowStep(instanceId: string, stepId: string, data: T.WorkflowStepActionRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/workflows/instances/${instanceId}/steps/${stepId}/action`, data);
    return res.data;
  }

  /** Gets pending workflow work for the current user. */
  async getPendingAssetWorkflows(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/workflows/pending`);
    return res.data;
  }

  /** Applies a stock adjustment. */
  async adjustAssetInventory(data: T.StockAdjustmentRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/inventory/stock-adjustments`, data);
    return res.data;
  }

  /** Performs a physical stock take. */
  async performAssetStockTake(data: T.StockTakeRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/inventory/stock-take`, data);
    return res.data;
  }

  /** Gets low stock items. */
  async getLowStockAssets(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/inventory/low-stock`);
    return res.data;
  }

  /** Gets the current stock report. */
  async getCurrentStockReport(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/inventory/reports/current-stock`);
    return res.data;
  }

  /** Gets asset utilization metrics. */
  async getAssetUtilizationReport(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/reports/utilization`);
    return res.data;
  }

  /** Gets asset lifecycle metrics. */
  async getAssetLifecycleReport(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/reports/lifecycle`);
    return res.data;
  }

  /** Gets asset compliance metrics. */
  async getAssetComplianceReport(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/reports/compliance`);
    return res.data;
  }

  /** Gets the global asset activity feed. */
  async getGlobalAssetActivity(params?: { action?: string; fromDate?: string; toDate?: string; userId?: string; take?: number; skip?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/admin/activity`, { params });
    return res.data;
  }

  /** Queues an audit report for generation. */
  async generateAssetAuditReport(data: T.GenerateAuditReportRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/audit/generate`, data);
    return res.data;
  }

  /** Gets assets assigned to the current user. */
  async getMyAssignedAssets(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/users/me/assets`);
    return res.data;
  }
}
