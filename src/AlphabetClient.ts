// AUTO-GENERATED — Alphabet API SDK client
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { AdminApi } from './api/admin.api';
import { AssetManagementModuleApi } from './api/asset-management-module.api';
import { CommunicationModuleApi } from './api/communication-module.api';
import { IdentityModuleApi } from './api/identity-module.api';
import { LeaveManagementModuleAdministrationApi } from './api/leave-management-module-administration.api';
import { LeaveManagementModuleApprovalsApi } from './api/leave-management-module-approvals.api';
import { LeaveManagementModuleBalancesApi } from './api/leave-management-module-balances.api';
import { LeaveManagementModuleCalendarApi } from './api/leave-management-module-calendar.api';
import { LeaveManagementModuleDelegationsApi } from './api/leave-management-module-delegations.api';
import { LeaveManagementModuleLeaveTypesApi } from './api/leave-management-module-leave-types.api';
import { LeaveManagementModuleRequestsApi } from './api/leave-management-module-requests.api';
import { PrivilegeModuleApi } from './api/privilege-module.api';
import { ProductModuleApi } from './api/product-module.api';
import { ProductivityModuleEventsApi } from './api/productivity-module-events.api';
import { ProductivityModuleNotesApi } from './api/productivity-module-notes.api';
import { ProductivityModuleRemindersApi } from './api/productivity-module-reminders.api';
import { ProductivityModuleReportsApi } from './api/productivity-module-reports.api';
import { ProductivityModuleSmartViewsApi } from './api/productivity-module-smart-views.api';
import { ProductivityModuleTasksApi } from './api/productivity-module-tasks.api';
import { ProductivityModuleTemplatesApi } from './api/productivity-module-templates.api';
import { ProductivityModuleTodosApi } from './api/productivity-module-todos.api';
import { SchedulerModuleApi } from './api/scheduler-module.api';

export interface AlphabetClientConfig {
  /** Base URL of the API, e.g. https://api.example.com */
  baseURL: string;
  /** JWT bearer token – set after login via setAccessToken() */
  accessToken?: string;
  /** Called when a 401 is received – implement token refresh or logout here */
  onUnauthorized?: () => void;
  /** Additional axios config merged on top of defaults */
  axiosConfig?: AxiosRequestConfig;
}

export class AlphabetClient {
  private readonly axiosInstance: AxiosInstance;

  readonly adminApi: AdminApi;
  readonly assetManagementModuleApi: AssetManagementModuleApi;
  readonly communicationModuleApi: CommunicationModuleApi;
  readonly identityModuleApi: IdentityModuleApi;
  readonly leaveManagementModuleAdministrationApi: LeaveManagementModuleAdministrationApi;
  readonly leaveManagementModuleApprovalsApi: LeaveManagementModuleApprovalsApi;
  readonly leaveManagementModuleBalancesApi: LeaveManagementModuleBalancesApi;
  readonly leaveManagementModuleCalendarApi: LeaveManagementModuleCalendarApi;
  readonly leaveManagementModuleDelegationsApi: LeaveManagementModuleDelegationsApi;
  readonly leaveManagementModuleLeaveTypesApi: LeaveManagementModuleLeaveTypesApi;
  readonly leaveManagementModuleRequestsApi: LeaveManagementModuleRequestsApi;
  readonly privilegeModuleApi: PrivilegeModuleApi;
  readonly productModuleApi: ProductModuleApi;
  readonly productivityModuleEventsApi: ProductivityModuleEventsApi;
  readonly productivityModuleNotesApi: ProductivityModuleNotesApi;
  readonly productivityModuleRemindersApi: ProductivityModuleRemindersApi;
  readonly productivityModuleReportsApi: ProductivityModuleReportsApi;
  readonly productivityModuleSmartViewsApi: ProductivityModuleSmartViewsApi;
  readonly productivityModuleTasksApi: ProductivityModuleTasksApi;
  readonly productivityModuleTemplatesApi: ProductivityModuleTemplatesApi;
  readonly productivityModuleTodosApi: ProductivityModuleTodosApi;
  readonly schedulerModuleApi: SchedulerModuleApi;

  constructor(private config: AlphabetClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      headers: { 'Content-Type': 'application/json' },
      ...config.axiosConfig,
    });

    // Attach Authorization header on every request
    this.axiosInstance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        if (this.config.accessToken) {
          req.headers = req.headers ?? {};
          req.headers['Authorization'] = `Bearer ${this.config.accessToken}`;
        }
        return req;
      }
    );

    // Handle 401 globally
    this.axiosInstance.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error?.response?.status === 401 && this.config.onUnauthorized) {
          this.config.onUnauthorized();
        }
        return Promise.reject(error);
      }
    );

    this.adminApi = new AdminApi(this.axiosInstance);
    this.assetManagementModuleApi = new AssetManagementModuleApi(this.axiosInstance);
    this.communicationModuleApi = new CommunicationModuleApi(this.axiosInstance);
    this.identityModuleApi = new IdentityModuleApi(this.axiosInstance);
    this.leaveManagementModuleAdministrationApi = new LeaveManagementModuleAdministrationApi(this.axiosInstance);
    this.leaveManagementModuleApprovalsApi = new LeaveManagementModuleApprovalsApi(this.axiosInstance);
    this.leaveManagementModuleBalancesApi = new LeaveManagementModuleBalancesApi(this.axiosInstance);
    this.leaveManagementModuleCalendarApi = new LeaveManagementModuleCalendarApi(this.axiosInstance);
    this.leaveManagementModuleDelegationsApi = new LeaveManagementModuleDelegationsApi(this.axiosInstance);
    this.leaveManagementModuleLeaveTypesApi = new LeaveManagementModuleLeaveTypesApi(this.axiosInstance);
    this.leaveManagementModuleRequestsApi = new LeaveManagementModuleRequestsApi(this.axiosInstance);
    this.privilegeModuleApi = new PrivilegeModuleApi(this.axiosInstance);
    this.productModuleApi = new ProductModuleApi(this.axiosInstance);
    this.productivityModuleEventsApi = new ProductivityModuleEventsApi(this.axiosInstance);
    this.productivityModuleNotesApi = new ProductivityModuleNotesApi(this.axiosInstance);
    this.productivityModuleRemindersApi = new ProductivityModuleRemindersApi(this.axiosInstance);
    this.productivityModuleReportsApi = new ProductivityModuleReportsApi(this.axiosInstance);
    this.productivityModuleSmartViewsApi = new ProductivityModuleSmartViewsApi(this.axiosInstance);
    this.productivityModuleTasksApi = new ProductivityModuleTasksApi(this.axiosInstance);
    this.productivityModuleTemplatesApi = new ProductivityModuleTemplatesApi(this.axiosInstance);
    this.productivityModuleTodosApi = new ProductivityModuleTodosApi(this.axiosInstance);
    this.schedulerModuleApi = new SchedulerModuleApi(this.axiosInstance);
  }

  /** Update the bearer token (e.g. after login or token refresh) */
  setAccessToken(token: string): void {
    this.config.accessToken = token;
  }

  /** Remove the bearer token (e.g. on logout) */
  clearAccessToken(): void {
    this.config.accessToken = undefined;
  }
}

export type { AdminApi, AssetManagementModuleApi, CommunicationModuleApi, IdentityModuleApi, LeaveManagementModuleAdministrationApi, LeaveManagementModuleApprovalsApi, LeaveManagementModuleBalancesApi, LeaveManagementModuleCalendarApi, LeaveManagementModuleDelegationsApi, LeaveManagementModuleLeaveTypesApi, LeaveManagementModuleRequestsApi, PrivilegeModuleApi, ProductModuleApi, ProductivityModuleEventsApi, ProductivityModuleNotesApi, ProductivityModuleRemindersApi, ProductivityModuleReportsApi, ProductivityModuleSmartViewsApi, ProductivityModuleTasksApi, ProductivityModuleTemplatesApi, ProductivityModuleTodosApi, SchedulerModuleApi };
