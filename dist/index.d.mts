import { AxiosInstance, AxiosRequestConfig } from 'axios';

interface AddJobDependencyRequest {
    dependsOnJobIds?: Array<string> | null;
    condition?: string | null;
}
interface AddJobExclusionRequest {
    excludedDates?: Array<string> | null;
    excludedDaysOfWeek?: Array<DayOfWeek> | null;
    timeRange?: TimeRangeDto;
}
interface AddTimeEntryRequest {
    startTime?: string;
    endTime?: string;
    description?: string | null;
}
interface Address {
    street?: string | null;
    city?: string | null;
    state?: string | null;
    postalCode?: string | null;
    country?: string | null;
}
interface AdjustLeaveBalanceRequest {
    userId?: string;
    leaveTypeId?: string;
    year?: number;
    adjustment?: number;
    reason?: string | null;
}
interface AdminCreateUserRequest {
    email?: string | null;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    role?: string | null;
}
interface AdminLockUserRequest {
    durationMinutes?: number;
}
interface AdminResetPasswordRequest {
    newPassword?: string | null;
}
interface AdminUserDetailDto {
    userId?: string;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    emailConfirmed?: boolean;
    isLockedOut?: boolean;
    lockoutEnd?: string | null;
    isTwoFactorEnabled?: boolean;
    lastLoginAt?: string | null;
    createdAt?: string;
    roles?: Array<string> | null;
}
interface ApprovalChainApplicability {
    leaveTypeIds?: Array<string> | null;
    departmentIds?: Array<string> | null;
    employeeLevels?: Array<string> | null;
    geographyIds?: Array<string> | null;
    minDays?: number;
    maxDays?: number | null;
}
interface ApprovalDecisionRequest {
    comment?: string | null;
    attachments?: Array<string> | null;
    level?: number | null;
    notifyApplicant?: boolean;
    applyPartialApproval?: boolean;
    approvedDays?: number | null;
}
interface ApprovalLevelDefinition {
    level?: number;
    name?: string | null;
    approverType?: LeaveApproverType;
    approverValue?: string | null;
    requiredApprovers?: number;
    timeoutHours?: number;
    escalationEnabled?: boolean;
    escalationAfterHours?: number | null;
    escalationToRole?: string | null;
    autoApproveOnTimeout?: boolean;
    canDelegate?: boolean;
    conditions?: Record<string, string> | null;
}
type AssetAssignmentType = 1 | 2 | 3 | 4;
type AssetCondition = 1 | 2 | 3 | 4 | 5;
type AssetLocationType = 1 | 2 | 3 | 4 | 5;
type AssetMaintenancePriority = 1 | 2 | 3 | 4;
type AssetMaintenanceType = 1 | 2 | 3;
type AssetStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface AssignAssetRequest {
    assignedToUserId?: string;
    expectedReturnDate?: string | null;
    assignmentType?: AssetAssignmentType;
    purpose?: string | null;
    conditionAtAssignment?: AssetCondition;
    notes?: string | null;
}
interface AssignPolicyRequest {
    policyId?: string;
    expiresAt?: string | null;
}
interface AssignRolePrivilegesRequest {
    privilegeIds?: Array<string> | null;
    expiresAt?: string | null;
}
interface AssignUserPrivilegeRequest {
    privilegeId?: string | null;
    effect?: PrivilegeEffect;
    expiresAt?: string | null;
    reason?: string | null;
}
interface AuditLogDto {
    id?: string;
    userId?: string | null;
    action?: string | null;
    success?: boolean;
    message?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    timestamp?: string;
}
interface AuthResponseDto {
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresIn?: number;
    tokenType?: string | null;
    requiresTwoFactor?: boolean;
    mfaToken?: string | null;
    message?: string | null;
}
interface AuthenticatorSetupDto {
    sharedKey?: string | null;
    authenticatorUri?: string | null;
    manualEntryKey?: string | null;
}
interface AvailabilityDateRange {
    start?: string;
    end?: string;
}
interface BatchApprovalRequest {
    requestIds?: Array<string> | null;
    action?: string | null;
    comment?: string | null;
}
interface BatchPrivilegeCheckRequest {
    privileges?: Array<string> | null;
}
interface BulkRolePrivilegeRequest {
    roleIds?: Array<string> | null;
    privilegeIds?: Array<string> | null;
    operation?: string | null;
    expiresAt?: string | null;
}
interface CancelLeaveRequest {
    reason?: string | null;
}
interface ChangePasswordCommand {
    currentPassword?: string | null;
    newPassword?: string | null;
    confirmPassword?: string | null;
}
interface CheckAvailabilityRequest {
    userIds?: Array<string> | null;
    dateRange?: AvailabilityDateRange;
    durationMinutes?: number;
}
interface ClearExecutionLogsRequest {
    olderThanDays?: number;
}
interface CommunicationBatchResponseDto {
    subject?: string | null;
    totalChannelsRequested?: number;
    successfulChannels?: number;
    failedChannels?: number;
    results?: Array<CommunicationDeliveryResultDto> | null;
}
interface CommunicationConfigurationDto {
    enabledChannels?: Array<string> | null;
    defaultChannel?: string | null;
    detailedLoggingEnabled?: boolean;
}
interface CommunicationDeliveryResultDto {
    channel?: string | null;
    isSuccess?: boolean;
    message?: string | null;
    processedAt?: string;
}
interface CompleteMaintenanceRequest {
    completionDate?: string;
    actualCost?: number;
    notes?: string | null;
    nextMaintenanceDueDate?: string | null;
}
interface ConfirmEmailCommand {
    userId?: string;
    token?: string | null;
}
interface Coordinates {
    latitude?: number;
    longitude?: number;
}
interface CreateAccrualRuleRequest {
    leaveTypeId?: string;
    accrualMethod?: LeaveAccrualMethod;
    accrualRate?: number;
    maxAccrual?: number;
    tenureRulesJson?: string | null;
}
interface CreateApprovalChainRequest {
    name?: string | null;
    code?: string | null;
    description?: string | null;
    applicableTo?: ApprovalChainApplicability;
    approvalLevels?: Array<ApprovalLevelDefinition> | null;
    finalApprovalLevel?: number;
    allowSkipLevels?: boolean;
    parallelApproval?: boolean;
    isActive?: boolean;
}
interface CreateAssetCategoryRequest {
    name?: string | null;
    description?: string | null;
    parentCategoryId?: string | null;
    customFieldsSchema?: Record<string, string> | null;
    depreciationRate?: number | null;
    defaultLocationId?: string | null;
}
interface CreateAssetRequest {
    assetTag?: string | null;
    name?: string | null;
    description?: string | null;
    categoryId?: string;
    subcategory?: string | null;
    manufacturer?: string | null;
    model?: string | null;
    serialNumber?: string | null;
    purchaseDate?: string | null;
    warrantyExpiry?: string | null;
    cost?: number;
    currency?: string | null;
    status?: AssetStatus;
    condition?: AssetCondition;
    locationId?: string;
    supplierId?: string | null;
    customFields?: Record<string, string> | null;
    images?: Array<string> | null;
    documents?: Array<string> | null;
}
interface CreateBlackoutPeriodRequest {
    startDate?: string;
    endDate?: string;
    reason?: string | null;
    applicableTo?: Array<string> | null;
}
interface CreateDelegationRequest {
    delegatorUserId?: string;
    delegateToUserId?: string;
    delegationType?: LeaveDelegationType;
    permission?: LeaveDelegationPermission;
    applicableLeaveTypes?: Array<string> | null;
    applicableApprovalLevels?: Array<number> | null;
    applicableDepartments?: Array<string> | null;
    applicableEmployees?: Array<string> | null;
    startDate?: string;
    endDate?: string | null;
    reason?: string | null;
    isActive?: boolean;
}
interface CreateEventRequest {
    title?: string | null;
    description?: string | null;
    location?: string | null;
    isAllDay?: boolean;
    startTime?: string;
    endTime?: string;
    timezone?: string | null;
    recurrence?: RecurrencePattern;
    attendees?: Array<string> | null;
    visibility?: EventVisibility;
    color?: string | null;
    reminderMinutesBefore?: Array<number> | null;
    conferenceLink?: string | null;
}
interface CreateLeaveTypeRequest {
    name?: string | null;
    code?: string | null;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    isPaid?: boolean;
    defaultDaysPerYear?: number;
    maxConsecutiveDays?: number | null;
    minDaysPerRequest?: number;
    maxDaysPerRequest?: number | null;
    requiresApproval?: boolean;
    approvalChainId?: string | null;
    carryForwardEnabled?: boolean;
    maxCarryForwardDays?: number;
    carryForwardExpiryMonths?: number;
    encashmentEnabled?: boolean;
    encashmentRate?: number | null;
    prorationEnabled?: boolean;
    eligibilityRules?: LeaveEligibilityRules;
    blackoutDates?: Array<LeaveBlackoutDate> | null;
    requiresAttachment?: boolean;
    allowedAttachmentTypes?: Array<string> | null;
    autoApproveRules?: LeaveAutoApproveRules;
    isActive?: boolean;
}
interface CreateLocationRequest {
    name?: string | null;
    code?: string | null;
    type?: AssetLocationType;
    address?: Address;
    parentLocationId?: string | null;
    isActive?: boolean;
    coordinates?: Coordinates;
    contactPerson?: string | null;
    contactPhone?: string | null;
}
interface CreateNoteRequest {
    title?: string | null;
    content?: string | null;
    format?: NoteFormat;
    category?: string | null;
    tags?: Array<string> | null;
    color?: string | null;
    isPinned?: boolean;
    isFavorite?: boolean;
    notebookId?: string | null;
    collaborators?: Array<string> | null;
}
interface CreateNotebookRequest {
    name?: string | null;
    description?: string | null;
    color?: string | null;
    parentNotebookId?: string | null;
}
interface CreatePrivilegeAccessRequest {
    privilegeId?: string | null;
    reason?: string | null;
    requestedDurationDays?: number;
    approverEmail?: string | null;
}
interface CreatePrivilegeCategoryRequest {
    name?: string | null;
    description?: string | null;
    parentCategoryId?: string | null;
    sortOrder?: number;
}
interface CreatePrivilegePolicyRequest {
    name?: string | null;
    description?: string | null;
    privileges?: Array<string> | null;
    condition?: PrivilegePolicyCondition;
}
interface CreatePrivilegeRequest {
    name?: string | null;
    displayName?: string | null;
    description?: string | null;
    category?: string | null;
    resourceType?: string | null;
    actions?: Array<string> | null;
    isGlobal?: boolean;
    dependsOn?: Array<string> | null;
    attributes?: Record<string, string> | null;
}
interface CreateProductRequest {
    name?: string | null;
    description?: string | null;
    price?: number;
    currency?: string | null;
}
interface CreatePublicHolidayRequest {
    name?: string | null;
    date?: string;
    country?: string | null;
    state?: string | null;
    isPaid?: boolean;
    recurring?: boolean;
}
interface CreateReminderFromEntityRequest {
    title?: string | null;
    description?: string | null;
    reminderTime?: string;
}
interface CreateReminderRequest {
    title?: string | null;
    description?: string | null;
    reminderTime?: string;
    reminderType?: ReminderType;
    repeatInterval?: number | null;
    repeatCount?: number | null;
    endDate?: string | null;
    soundEnabled?: boolean;
    vibrationEnabled?: boolean;
    snoozeEnabled?: boolean;
    snoozeMinutes?: number | null;
    linkedEntityType?: string | null;
    linkedEntityId?: string | null;
    notificationMethods?: Array<string> | null;
    recurrencePattern?: RecurrencePattern;
}
interface CreateSchedulerJobRequest {
    name?: string | null;
    description?: string | null;
    jobType?: JobType;
    scheduleType?: ScheduleType;
    scheduleExpression?: string | null;
    intervalSeconds?: number | null;
    runAt?: string | null;
    jobConfiguration?: JobConfigurationDto;
    retryPolicy?: RetryPolicyDto;
    timeoutSeconds?: number | null;
    timezone?: string | null;
    isEnabled?: boolean;
    tags?: Array<string> | null;
    createdBy?: string | null;
}
interface CreateSmartListRequest {
    name?: string | null;
    entityType?: string | null;
    criteria?: unknown | null;
    isShared?: boolean;
}
interface CreateTaskRequest {
    title?: string | null;
    description?: string | null;
    priority?: Priority;
    status?: TaskStatus;
    dueDate?: string | null;
    estimatedHours?: number | null;
    assigneeId?: string | null;
    reviewerId?: string | null;
    parentTaskId?: string | null;
    projectId?: string | null;
    dependencies?: Array<string> | null;
    checklist?: Array<TodoChecklistItem> | null;
}
interface CreateTemplateRequest {
    name?: string | null;
    entityType?: string | null;
    description?: string | null;
    template?: unknown | null;
}
interface CreateTodoRequest {
    title?: string | null;
    description?: string | null;
    priority?: Priority;
    dueDate?: string | null;
    reminderMinutesBefore?: number | null;
    category?: string | null;
    tags?: Array<string> | null;
    isRecurring?: boolean;
    recurrencePattern?: RecurrencePattern;
    assignedTo?: string | null;
}
interface CreateWorkflowDefinitionRequest {
    name?: string | null;
    description?: string | null;
    version?: number;
    steps?: Array<CreateWorkflowDefinitionStepRequest> | null;
}
interface CreateWorkflowDefinitionStepRequest {
    name?: string | null;
    order?: number;
    assignedToRole?: string | null;
    requiredApprovals?: number;
    timeoutHours?: number;
    actions?: Array<string> | null;
}
interface CreateWorkflowJobRequest {
    jobId?: string;
    dependsOn?: Array<string> | null;
    onFailure?: string | null;
}
interface CreateWorkflowRequest {
    name?: string | null;
    jobs?: Array<CreateWorkflowJobRequest> | null;
}
interface CurrentUserDto {
    userId?: string;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    emailConfirmed?: boolean;
    isAuthenticated?: boolean;
    authenticationType?: string | null;
    roles?: Array<string> | null;
}
interface DashboardStatsDto {
    totalJobs?: number;
    activeJobs?: number;
    pausedJobs?: number;
    failedJobs?: number;
    executionsToday?: number;
    successRate?: number;
    averageDurationSeconds?: number;
    upcomingExecutions?: Array<UpcomingExecutionDto> | null;
}
type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
interface DecidePrivilegeRequest {
    notes?: string | null;
}
interface EnableOtpCommand {
    deliveryMethod?: TwoFactorMethod;
    destination?: string | null;
}
type EventVisibility = 0 | 1 | 2;
type ExecutionStatus = 1 | 2 | 3 | 4 | 5 | 6;
interface ForgotPasswordCommand {
    email?: string | null;
}
interface GenerateAuditReportRequest {
    start?: string;
    end?: string;
    format?: string | null;
    includeDeleted?: boolean;
}
interface ImportSchedulerJobsRequest {
    jsonPayload?: string | null;
}
interface InitializeLeaveBalanceRequest {
    userId?: string;
    year?: number;
    balances?: Array<InitializeLeaveBalanceRequestItem> | null;
}
interface InitializeLeaveBalanceRequestItem {
    leaveTypeId?: string;
    allocated?: number;
    remaining?: number;
    carryForward?: number;
}
interface JobConfigurationDto {
    url?: string | null;
    method?: string | null;
    headers?: Record<string, string> | null;
    body?: string | null;
    timeoutSeconds?: number | null;
    retryOnStatusCodes?: Array<number> | null;
    successStatusCodes?: Array<number> | null;
    storedProcedureName?: string | null;
    parameters?: Record<string, string> | null;
    commandTimeoutSeconds?: number | null;
    databaseConnectionStringName?: string | null;
    handlerType?: string | null;
    methodName?: string | null;
    operation?: string | null;
    sourcePath?: string | null;
    destinationPath?: string | null;
    deleteAfterDays?: number | null;
    olderThanHours?: number | null;
    deleteEmptyDirectories?: boolean | null;
    archivePath?: string | null;
    compression?: string | null;
}
interface JobDto {
    id?: string;
    name?: string | null;
    description?: string | null;
    jobType?: JobType;
    scheduleType?: ScheduleType;
    scheduleExpression?: string | null;
    intervalSeconds?: number | null;
    runAt?: string | null;
    jobConfiguration?: JobConfigurationDto;
    retryPolicy?: RetryPolicyDto;
    timezone?: string | null;
    isEnabled?: boolean;
    isPaused?: boolean;
    isDeleted?: boolean;
    createdBy?: string | null;
    lastModifiedBy?: string | null;
    tags?: Array<string> | null;
    schedulerJobId?: string | null;
    currentStatus?: string | null;
    createdAt?: string;
    updatedAt?: string;
    lastExecutedAt?: string | null;
    lastExecutionStatus?: ExecutionStatus;
    consecutiveFailures?: number;
}
interface JobDtoPagedResponseDto {
    items?: Array<JobDto> | null;
    totalCount?: number;
    pageNumber?: number;
    pageSize?: number;
}
interface JobExecutionDto {
    id?: string;
    jobId?: string;
    triggeredBy?: string | null;
    startedAt?: string;
    endedAt?: string | null;
    status?: ExecutionStatus;
    durationMs?: number | null;
    output?: string | null;
    errorMessage?: string | null;
    retryCount?: number;
    retryParentId?: string | null;
    createdAt?: string;
}
interface JobExecutionDtoPagedResponseDto {
    items?: Array<JobExecutionDto> | null;
    totalCount?: number;
    pageNumber?: number;
    pageSize?: number;
}
type JobType = 1 | 2 | 3 | 4;
type LeaveAccrualMethod = 1 | 2 | 3 | 4;
type LeaveApproverType = 1 | 2 | 3 | 4 | 5 | 6;
interface LeaveAutoApproveRules {
    enabled?: boolean;
    maxDays?: number;
    leadTimeDays?: number;
}
interface LeaveBlackoutDate {
    start?: string;
    end?: string;
    reason?: string | null;
}
type LeaveDayPart = 1 | 2 | 3;
type LeaveDelegationPermission = 1 | 2 | 3;
type LeaveDelegationType = 1 | 2 | 3;
interface LeaveEligibilityRules {
    minEmploymentDays?: number;
    probationPassed?: boolean;
    applicableRoles?: Array<string> | null;
    excludedRoles?: Array<string> | null;
}
interface LeavePartialDays {
    startDatePart?: LeaveDayPart;
    endDatePart?: LeaveDayPart;
}
interface LeaveSuggestedDateRange {
    start?: string;
    end?: string;
}
interface LoginRequest {
    email?: string | null;
    password?: string | null;
    useCookies?: boolean;
}
interface LogoutRequest {
    refreshToken?: string | null;
}
interface MfaLoginRequest {
    mfaToken?: string | null;
    verificationCode?: string | null;
    useCookies?: boolean;
}
interface ModifyLeaveRequest {
    startDate?: string;
    endDate?: string;
    partialDays?: LeavePartialDays;
    reason?: string | null;
    attachmentIds?: Array<string> | null;
    contactNumber?: string | null;
    alternateArrangements?: string | null;
}
interface MoveAssetRequest {
    newLocationId?: string;
    reason?: string | null;
}
interface MovePrivilegeCategoryRequest {
    categoryId?: string;
}
type NoteFormat = 0 | 1 | 2;
type Priority = 1 | 2 | 3 | 4;
type PrivilegeAction = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
interface PrivilegeAnalyticsDto {
    mostUsedPrivileges?: Array<PrivilegeUsageMetricDto> | null;
    unusedPrivileges?: Array<string> | null;
    privilegeAssignmentTrend?: Array<PrivilegeAssignmentTrendDto> | null;
}
interface PrivilegeAssignmentDto {
    privilegeId?: string;
    privilegeName?: string | null;
    displayName?: string | null;
    assignmentSource?: string | null;
    grantedAt?: string;
    grantedBy?: string | null;
    expiresAt?: string | null;
    isActive?: boolean;
}
interface PrivilegeAssignmentTrendDto {
    date?: string;
    assignments?: number;
}
interface PrivilegeAuditLogDto {
    id?: string;
    userId?: string | null;
    privilegeId?: string | null;
    action?: string | null;
    source?: string | null;
    performedBy?: string | null;
    performedAt?: string;
    ipAddress?: string | null;
    metadata?: Record<string, string> | null;
}
interface PrivilegeCategoryDto {
    id?: string;
    name?: string | null;
    description?: string | null;
    parentCategoryId?: string | null;
    sortOrder?: number;
    children?: Array<PrivilegeCategoryDto> | null;
}
interface PrivilegeCheckResultDto {
    hasPrivilege?: boolean;
    source?: string | null;
    expiresAt?: string | null;
    reason?: string | null;
}
interface PrivilegeDto {
    id?: string;
    name?: string | null;
    displayName?: string | null;
    description?: string | null;
    categoryId?: string | null;
    categoryName?: string | null;
    resourceType?: string | null;
    actions?: Array<string> | null;
    isGlobal?: boolean;
    isDeprecated?: boolean;
    dependsOn?: Array<string> | null;
    attributes?: Record<string, string> | null;
    createdAt?: string;
    createdBy?: string | null;
    updatedAt?: string;
}
interface PrivilegeDtoPagedResponseDto {
    items?: Array<PrivilegeDto> | null;
    totalCount?: number;
    pageNumber?: number;
    pageSize?: number;
}
type PrivilegeEffect = 1 | 2;
type PrivilegePolicyCondition = 1 | 2;
interface PrivilegeUsageMetricDto {
    privilege?: string | null;
    usageCount?: number;
    uniqueUsers?: number;
}
interface ProblemDetails {
    type?: string | null;
    title?: string | null;
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
}
interface ProductResponseDto {
    id?: string;
    name?: string | null;
    description?: string | null;
    price?: number;
    currency?: string | null;
    status?: string | null;
    createdAt?: string;
}
interface RecoveryCodesDto {
    codes?: Array<string> | null;
}
interface RecurrencePattern {
    pattern?: string | null;
    interval?: number;
    daysOfWeek?: Array<string> | null;
    endDate?: string | null;
    maxOccurrences?: number | null;
    customExpression?: string | null;
}
interface RefreshTokenRequest {
    refreshToken?: string | null;
    useCookies?: boolean;
}
interface RegisterCommand {
    email?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}
interface RejectLeaveRequest {
    reason?: string | null;
    suggestedDates?: Array<LeaveSuggestedDateRange> | null;
}
type ReminderStatus = 0 | 1 | 2 | 3 | 4;
type ReminderType = 0 | 1 | 2 | 3 | 4 | 5;
interface RequestChangesRequest {
    comment?: string | null;
}
interface RescheduleSchedulerJobRequest {
    scheduleType?: ScheduleType;
    scheduleExpression?: string | null;
    intervalSeconds?: number | null;
    runAt?: string | null;
    effectiveFrom?: string | null;
}
interface ResetPasswordCommand {
    email?: string | null;
    token?: string | null;
    newPassword?: string | null;
    confirmPassword?: string | null;
}
interface RespondToEventRequest {
    response?: string | null;
}
interface RetireAssetRequest {
    status?: AssetStatus;
    reason?: string | null;
}
type RetryBackoffType = 1 | 2 | 3;
interface RetryPolicyDto {
    maxRetryAttempts?: number;
    retryDelaySeconds?: number;
    retryBackoffType?: RetryBackoffType;
    retryOnExceptions?: Array<string> | null;
    shouldRetryHttpStatusCodes?: Array<number> | null;
}
interface ScheduleMaintenanceRequest {
    maintenanceType?: AssetMaintenanceType;
    scheduledDate?: string;
    description?: string | null;
    assignedToVendor?: string | null;
    estimatedCost?: number;
    priority?: AssetMaintenancePriority;
}
type ScheduleType = 1 | 2 | 3;
interface SendCommunicationCommand {
    subject?: string | null;
    body?: string | null;
    channels?: Array<string> | null;
    emailAddress?: string | null;
    phoneNumber?: string | null;
    userId?: string | null;
    pushToken?: string | null;
    webhookUrl?: string | null;
    isHtml?: boolean;
}
interface ShareNoteRequest {
    email?: string | null;
    permission?: string | null;
}
interface SnoozeReminderRequest {
    minutes?: number;
}
interface StartWorkflowRequest {
    workflowDefinitionId?: string;
    context?: Record<string, string> | null;
}
interface StockAdjustmentRequest {
    assetId?: string;
    locationId?: string;
    adjustmentType?: StockAdjustmentType;
    quantity?: number;
    reason?: string | null;
    referenceNumber?: string | null;
    minimumThreshold?: number;
}
type StockAdjustmentType = 1 | 2 | 3;
interface StockTakeCountedItemRequest {
    assetId?: string;
    countedQuantity?: number;
    expectedQuantity?: number;
    discrepancy?: number;
}
interface StockTakeRequest {
    locationId?: string;
    countedItems?: Array<StockTakeCountedItemRequest> | null;
}
interface SubmitLeaveRequest {
    leaveTypeId?: string;
    startDate?: string;
    endDate?: string;
    partialDays?: LeavePartialDays;
    reason?: string | null;
    attachmentIds?: Array<string> | null;
    contactNumber?: string | null;
    alternateArrangements?: string | null;
    applyToAllDays?: boolean;
    isHalfDay?: boolean;
}
interface SuggestMeetingTimesRequest {
    attendees?: Array<string> | null;
    durationMinutes?: number;
    dateRange?: AvailabilityDateRange;
    workingHours?: WorkingHoursRequest;
}
type TaskStatus = 0 | 1 | 2 | 3 | 4;
interface TimeRangeDto {
    start?: string | null;
    end?: string | null;
}
interface TimelinePointDto {
    bucket?: string;
    successCount?: number;
    failedCount?: number;
    runningCount?: number;
}
interface TodoChecklistItem {
    text?: string | null;
    completed?: boolean;
}
type TodoStatus = 0 | 1 | 2 | 3 | 4;
interface TransferAssetRequest {
    fromUserId?: string;
    toUserId?: string;
    reason?: string | null;
    transferDate?: string;
    expectedReturnDate?: string | null;
}
type TwoFactorMethod = 0 | 1 | 2 | 3;
interface UnassignAssetRequest {
    returnedByUserId?: string;
    receivedByUserId?: string;
    conditionOnReturn?: AssetCondition;
    damageNotes?: string | null;
    missingItems?: Array<string> | null;
    actualReturnDate?: string;
}
interface UpcomingExecutionDto {
    jobId?: string;
    jobName?: string | null;
    nextRun?: string | null;
}
interface UpdateAssetRequest {
    name?: string | null;
    description?: string | null;
    categoryId?: string;
    subcategory?: string | null;
    manufacturer?: string | null;
    model?: string | null;
    serialNumber?: string | null;
    purchaseDate?: string | null;
    warrantyExpiry?: string | null;
    cost?: number;
    currency?: string | null;
    condition?: AssetCondition;
    locationId?: string;
    supplierId?: string | null;
    customFields?: Record<string, string> | null;
    images?: Array<string> | null;
    documents?: Array<string> | null;
}
interface UpdateLeaveTypeRequest {
    name?: string | null;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    isPaid?: boolean;
    defaultDaysPerYear?: number;
    maxConsecutiveDays?: number | null;
    minDaysPerRequest?: number;
    maxDaysPerRequest?: number | null;
    requiresApproval?: boolean;
    approvalChainId?: string | null;
    carryForwardEnabled?: boolean;
    maxCarryForwardDays?: number;
    carryForwardExpiryMonths?: number;
    encashmentEnabled?: boolean;
    encashmentRate?: number | null;
    prorationEnabled?: boolean;
    eligibilityRules?: LeaveEligibilityRules;
    blackoutDates?: Array<LeaveBlackoutDate> | null;
    requiresAttachment?: boolean;
    allowedAttachmentTypes?: Array<string> | null;
    autoApproveRules?: LeaveAutoApproveRules;
    isActive?: boolean;
}
interface UpdateNoteRequest {
    title?: string | null;
    content?: string | null;
    format?: NoteFormat;
    category?: string | null;
    color?: string | null;
    isPinned?: boolean;
    isFavorite?: boolean;
    notebookId?: string | null;
}
interface UpdatePrivilegeRequest {
    displayName?: string | null;
    description?: string | null;
    category?: string | null;
    resourceType?: string | null;
    actions?: Array<string> | null;
    dependsOn?: Array<string> | null;
    attributes?: Record<string, string> | null;
}
interface UpdateSchedulerJobRequest {
    name?: string | null;
    description?: string | null;
    jobType?: JobType;
    scheduleType?: ScheduleType;
    scheduleExpression?: string | null;
    intervalSeconds?: number | null;
    runAt?: string | null;
    jobConfiguration?: JobConfigurationDto;
    retryPolicy?: RetryPolicyDto;
    timeoutSeconds?: number | null;
    timezone?: string | null;
    isEnabled?: boolean | null;
    tags?: Array<string> | null;
}
interface UpdateTaskStatusRequest {
    status?: TaskStatus;
    comment?: string | null;
}
interface UpdateTodoRequest {
    title?: string | null;
    description?: string | null;
    priority?: Priority;
    dueDate?: string | null;
    reminderMinutesBefore?: number | null;
    category?: string | null;
    tags?: Array<string> | null;
    isRecurring?: boolean;
    recurrencePattern?: RecurrencePattern;
    assignedTo?: string | null;
}
interface UserDto {
    userId?: string;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    emailConfirmed?: boolean;
}
interface UserEffectivePrivilegeDto {
    privilegeName?: string | null;
    isGranted?: boolean;
    source?: string | null;
    expiresAt?: string | null;
    reason?: string | null;
}
interface VerifyAuthenticatorCommand {
    verificationCode?: string | null;
}
interface VerifyOtpCommand {
    verificationCode?: string | null;
    destination?: string | null;
}
interface WorkflowStepActionRequest {
    action?: string | null;
    comment?: string | null;
}
interface WorkingHoursRequest {
    start?: string | null;
    end?: string | null;
    timezone?: string | null;
}

declare class AdminApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a new user account. */
    adminCreateUser(data: AdminCreateUserRequest): Promise<UserDto>;
    /** Lists all users. */
    adminGetUsers(): Promise<Array<UserDto>>;
    /** Gets detailed information for a single user. */
    adminGetUserById(userId: string): Promise<AdminUserDetailDto>;
    /** Locks a user account. */
    adminLockUser(userId: string, data?: AdminLockUserRequest): Promise<void>;
    /** Unlocks a previously locked account. */
    adminUnlockUser(userId: string): Promise<void>;
    /** Resets a user's password without the old password. */
    adminResetPassword(userId: string, data: AdminResetPasswordRequest): Promise<void>;
    /** Sends a password reset link to the user. */
    adminSendResetLink(userId: string): Promise<void>;
    /** Forces a user to sign out everywhere. */
    adminForceLogout(userId: string): Promise<void>;
    /** Gets the user's activity and audit history. */
    adminGetUserAuditLogs(userId: string, params?: {
        take?: string;
        skip?: string;
    }): Promise<Array<AuditLogDto>>;
}

declare class AssetManagementModuleApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a new asset. */
    createAsset(data: CreateAssetRequest): Promise<void>;
    /** Gets a filtered and paginated asset list. */
    getAssets(params?: {
        status?: string;
        categoryId?: string;
        locationId?: string;
        assignedToUserId?: string;
        search?: string;
        purchaseDateFrom?: string;
        purchaseDateTo?: string;
        costMin?: number;
        costMax?: number;
        condition?: string;
        warrantyExpiringInDays?: number;
        includeRetired?: boolean;
        sortBy?: string;
        sortDirection?: string;
        page?: number;
        pageSize?: number;
    }): Promise<void>;
    /** Gets a single asset with full details. */
    getAssetById(assetId: string): Promise<void>;
    /** Updates an existing asset. */
    updateAsset(assetId: string, data: UpdateAssetRequest): Promise<void>;
    /** Soft deletes an asset by retiring or disposing it. */
    retireAsset(assetId: string, data: RetireAssetRequest): Promise<void>;
    /** Moves an asset to a new location. */
    moveAsset(assetId: string, data: MoveAssetRequest): Promise<void>;
    /** Assigns an asset to a user. */
    assignAsset(assetId: string, data: AssignAssetRequest): Promise<void>;
    /** Returns an assigned asset. */
    unassignAsset(assetId: string, data: UnassignAssetRequest): Promise<void>;
    /** Transfers an assignment between users. */
    transferAsset(assetId: string, data: TransferAssetRequest): Promise<void>;
    /** Gets assignment history for an asset. */
    getAssetAssignments(assetId: string): Promise<void>;
    /** Schedules maintenance for an asset. */
    scheduleAssetMaintenance(assetId: string, data: ScheduleMaintenanceRequest): Promise<void>;
    /** Gets maintenance history for an asset. */
    getAssetMaintenanceHistory(assetId: string): Promise<void>;
    /** Completes a maintenance record. */
    completeAssetMaintenance(assetId: string, maintenanceId: string, data: CompleteMaintenanceRequest): Promise<void>;
    /** Calculates depreciation for an asset. */
    getAssetDepreciation(assetId: string, params?: {
        asOfDate?: string;
    }): Promise<void>;
    /** Gets the activity timeline for an asset. */
    getAssetActivity(assetId: string, params?: {
        action?: string;
        fromDate?: string;
        toDate?: string;
        userId?: string;
    }): Promise<void>;
    /** Scans an asset by barcode or QR payload. */
    scanAsset(params?: {
        barcode?: string;
    }): Promise<void>;
    /** Creates a category in the asset hierarchy. */
    createAssetCategory(data: CreateAssetCategoryRequest): Promise<void>;
    /** Gets the asset category hierarchy. */
    getAssetCategoryTree(): Promise<void>;
    /** Creates a location used by the asset module. */
    createAssetLocation(data: CreateLocationRequest): Promise<void>;
    /** Creates an asset workflow definition. */
    createAssetWorkflowDefinition(data: CreateWorkflowDefinitionRequest): Promise<void>;
    /** Starts a workflow for an asset. */
    startAssetWorkflow(assetId: string, data: StartWorkflowRequest): Promise<void>;
    /** Gets a workflow instance. */
    getAssetWorkflowInstance(instanceId: string): Promise<void>;
    /** Applies an action to the current workflow step. */
    actOnAssetWorkflowStep(instanceId: string, stepId: string, data: WorkflowStepActionRequest): Promise<void>;
    /** Gets pending workflow work for the current user. */
    getPendingAssetWorkflows(): Promise<void>;
    /** Applies a stock adjustment. */
    adjustAssetInventory(data: StockAdjustmentRequest): Promise<void>;
    /** Performs a physical stock take. */
    performAssetStockTake(data: StockTakeRequest): Promise<void>;
    /** Gets low stock items. */
    getLowStockAssets(): Promise<void>;
    /** Gets the current stock report. */
    getCurrentStockReport(): Promise<void>;
    /** Gets asset utilization metrics. */
    getAssetUtilizationReport(): Promise<void>;
    /** Gets asset lifecycle metrics. */
    getAssetLifecycleReport(): Promise<void>;
    /** Gets asset compliance metrics. */
    getAssetComplianceReport(): Promise<void>;
    /** Gets the global asset activity feed. */
    getGlobalAssetActivity(params?: {
        action?: string;
        fromDate?: string;
        toDate?: string;
        userId?: string;
        take?: number;
        skip?: number;
    }): Promise<void>;
    /** Queues an audit report for generation. */
    generateAssetAuditReport(data: GenerateAuditReportRequest): Promise<void>;
    /** Gets assets assigned to the current user. */
    getMyAssignedAssets(): Promise<void>;
}

declare class CommunicationModuleApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Sends a message through one or more configured channels. */
    sendCommunication(data: SendCommunicationCommand): Promise<CommunicationBatchResponseDto>;
    /** Gets the active communication module configuration. */
    getCommunicationConfiguration(): Promise<CommunicationConfigurationDto>;
}

declare class IdentityModuleApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Registers a new user account. */
    registerUser(data: RegisterCommand): Promise<UserDto>;
    /** Confirms a user's email address. */
    confirmEmail(data: ConfirmEmailCommand): Promise<void>;
    /** Authenticates a user. */
    login(data: LoginRequest): Promise<AuthResponseDto>;
    /** Starts the forgot-password flow. */
    forgotPassword(data: ForgotPasswordCommand): Promise<void>;
    /** Completes the password reset flow. */
    resetPassword(data: ResetPasswordCommand): Promise<void>;
    /** Refreshes an expired or expiring access token. */
    refreshToken(data: RefreshTokenRequest): Promise<AuthResponseDto>;
    /** Signs the current user out. */
    logout(data: LogoutRequest): Promise<void>;
    /** Changes the current user's password. */
    changePassword(data: ChangePasswordCommand): Promise<void>;
    /** Starts authenticator-app MFA enrollment. */
    enableAuthenticator(): Promise<AuthenticatorSetupDto>;
    /** Completes authenticator-app MFA enrollment. */
    verifyAuthenticator(data: VerifyAuthenticatorCommand): Promise<RecoveryCodesDto>;
    /** Enables OTP-based MFA delivery. */
    enableOtp(data: EnableOtpCommand): Promise<void>;
    /** Verifies an OTP code. */
    verifyOtp(data: VerifyOtpCommand): Promise<void>;
    /** Completes sign-in after MFA challenge. */
    mfaLogin(data: MfaLoginRequest): Promise<AuthResponseDto>;
    /** Gets the currently authenticated user. */
    getCurrentUser(): Promise<CurrentUserDto>;
    /** Gets current MFA recovery codes. */
    getRecoveryCodes(): Promise<RecoveryCodesDto>;
    /** Regenerates MFA recovery codes. */
    regenerateRecoveryCodes(): Promise<RecoveryCodesDto>;
}

declare class LeaveManagementModuleAdministrationApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets approval chains. */
    getLeaveApprovalChains(): Promise<void>;
    /** Creates an approval chain. */
    createLeaveApprovalChain(data: CreateApprovalChainRequest): Promise<void>;
    /** Creates a public holiday. */
    createPublicHoliday(data: CreatePublicHolidayRequest): Promise<void>;
    /** Creates a blackout period. */
    createLeaveBlackoutPeriod(data: CreateBlackoutPeriodRequest): Promise<void>;
    /** Creates an accrual rule. */
    createLeaveAccrualRule(data: CreateAccrualRuleRequest): Promise<void>;
    /** Runs leave accrual. */
    runLeaveAccrual(params?: {
        year?: number;
        reason?: string;
    }): Promise<void>;
    /** Gets leave audit logs. */
    getLeaveAuditLogs(params?: {
        userId?: string;
        requestId?: string;
        fromDate?: string;
        toDate?: string;
        take?: number;
        skip?: number;
    }): Promise<void>;
    /** Gets leave report summary. */
    getLeaveReportSummary(params?: {
        fromDate?: string;
        toDate?: string;
        userId?: string;
    }): Promise<void>;
}

declare class LeaveManagementModuleApprovalsApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets pending approvals. */
    getPendingLeaveApprovals(): Promise<void>;
    /** Approves a leave request. */
    approveLeaveRequest(requestId: string, data: ApprovalDecisionRequest): Promise<void>;
    /** Rejects a leave request. */
    rejectLeaveRequest(requestId: string, data: RejectLeaveRequest): Promise<void>;
    /** Requests leave request changes. */
    requestLeaveChanges(requestId: string, data: RequestChangesRequest): Promise<void>;
    /** Processes approvals in batch. */
    batchLeaveApproval(data: BatchApprovalRequest): Promise<void>;
    /** Gets approval history. */
    getLeaveApprovalHistory(requestId: string): Promise<void>;
}

declare class LeaveManagementModuleBalancesApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets my leave balances. */
    getMyLeaveBalances(params?: {
        year?: number;
    }): Promise<void>;
    /** Gets another user's leave balances. */
    getUserLeaveBalances(userId: string, params?: {
        year?: number;
    }): Promise<void>;
    /** Initializes leave balances. */
    initializeLeaveBalances(data: InitializeLeaveBalanceRequest): Promise<void>;
    /** Adjusts a leave balance. */
    adjustLeaveBalance(data: AdjustLeaveBalanceRequest): Promise<void>;
}

declare class LeaveManagementModuleCalendarApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets leave calendar data. */
    getLeaveCalendar(params?: {
        fromDate?: string;
        toDate?: string;
        userId?: string;
    }): Promise<void>;
    /** Gets public holidays. */
    getPublicHolidays(params?: {
        fromDate?: string;
        toDate?: string;
        country?: string;
    }): Promise<void>;
}

declare class LeaveManagementModuleDelegationsApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets leave delegations. */
    getLeaveDelegations(userId: string): Promise<void>;
    /** Creates approval delegation. */
    createLeaveDelegation(data: CreateDelegationRequest): Promise<void>;
    /** Revokes approval delegation. */
    revokeLeaveDelegation(delegationId: string): Promise<void>;
}

declare class LeaveManagementModuleLeaveTypesApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets configured leave types. */
    getLeaveTypes(params?: {
        isActive?: boolean;
        isPaid?: boolean;
        applicableToRole?: string;
    }): Promise<void>;
    /** Creates a leave type. */
    createLeaveType(data: CreateLeaveTypeRequest): Promise<void>;
    /** Updates a leave type. */
    updateLeaveType(leaveTypeId: string, data: UpdateLeaveTypeRequest): Promise<void>;
    /** Deactivates a leave type. */
    deactivateLeaveType(leaveTypeId: string): Promise<void>;
}

declare class LeaveManagementModuleRequestsApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Submits a leave request. */
    submitLeaveRequest(data: SubmitLeaveRequest): Promise<void>;
    /** Searches leave requests. */
    searchLeaveRequests(params?: {
        userId?: string;
        status?: string;
        fromDate?: string;
        toDate?: string;
        page?: number;
        pageSize?: number;
    }): Promise<void>;
    /** Gets a leave request. */
    getLeaveRequestById(requestId: string): Promise<void>;
    /** Modifies a leave request. */
    modifyLeaveRequest(requestId: string, data: ModifyLeaveRequest): Promise<void>;
    /** Cancels a leave request. */
    cancelLeaveRequest(requestId: string, data: CancelLeaveRequest): Promise<void>;
    /** Withdraws a pending leave request. */
    withdrawLeaveRequest(requestId: string): Promise<void>;
}

declare class PrivilegeModuleApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a new privilege definition. */
    createPrivilege(data: CreatePrivilegeRequest): Promise<string>;
    /** Gets a paginated list of privileges. */
    getPrivileges(params?: {
        pageNumber?: number;
        pageSize?: number;
        category?: string;
        search?: string;
        includeDeprecated?: boolean;
    }): Promise<PrivilegeDtoPagedResponseDto>;
    /** Gets a single privilege definition. */
    getPrivilegeById(privilegeId: string): Promise<PrivilegeDto>;
    /** Updates privilege metadata. */
    updatePrivilege(privilegeId: string, data: UpdatePrivilegeRequest): Promise<void>;
    /** Deprecates or hard-deletes a privilege. */
    deletePrivilege(privilegeId: string, params?: {
        hardDelete?: boolean;
    }): Promise<void>;
    /** Creates a privilege category. */
    createPrivilegeCategory(data: CreatePrivilegeCategoryRequest): Promise<string>;
    /** Gets all privilege categories. */
    getPrivilegeCategories(): Promise<Array<PrivilegeCategoryDto>>;
    /** Moves a privilege to a different category. */
    movePrivilegeCategory(privilegeId: string, data: MovePrivilegeCategoryRequest): Promise<void>;
    /** Creates a composite privilege policy. */
    createPrivilegePolicy(data: CreatePrivilegePolicyRequest): Promise<string>;
    /** Assigns privileges to a role. */
    assignPrivilegeToRole(roleId: string, data: AssignRolePrivilegesRequest): Promise<void>;
    /** Gets privileges assigned to a role. */
    getRolePrivileges(roleId: string): Promise<Array<PrivilegeAssignmentDto>>;
    /** Revokes a privilege from a role. */
    revokePrivilegeFromRole(roleId: string, privilegeId: string): Promise<void>;
    /** Bulk assigns or revokes privileges for roles. */
    bulkAssignPrivilegesToRoles(data: BulkRolePrivilegeRequest): Promise<void>;
    /** Assigns a privilege policy to a role. */
    assignPolicyToRole(roleId: string, data: AssignPolicyRequest): Promise<void>;
    /** Assigns a direct privilege to a user. */
    assignPrivilegeToUser(userId: string, data: AssignUserPrivilegeRequest): Promise<void>;
    /** Gets the user's effective privileges. */
    getUserEffectivePrivileges(userId: string): Promise<Array<UserEffectivePrivilegeDto>>;
    /** Revokes a direct privilege from a user. */
    revokePrivilegeFromUser(userId: string, privilegeId: string): Promise<void>;
    /** Gets privilege audit history for a user. */
    getUserPrivilegeAudit(userId: string, params?: {
        take?: number;
        skip?: number;
    }): Promise<Array<PrivilegeAuditLogDto>>;
    /** Assigns a privilege policy directly to a user. */
    assignPolicyToUser(userId: string, data: AssignPolicyRequest): Promise<void>;
    /** Checks whether the current user has a privilege. */
    checkCurrentUserPrivilege(privilegeName: string): Promise<PrivilegeCheckResultDto>;
    /** Checks multiple privileges for the current user. */
    batchCheckCurrentUserPrivileges(data: BatchPrivilegeCheckRequest): Promise<Record<string, boolean>>;
    /** Gets privilege usage analytics. */
    getPrivilegeAnalytics(): Promise<PrivilegeAnalyticsDto>;
    /** Gets privilege audit logs. */
    getPrivilegeAuditLogs(params?: {
        userId?: string;
        privilegeId?: string;
        action?: PrivilegeAction;
        from?: string;
        to?: string;
        take?: number;
        skip?: number;
    }): Promise<Array<PrivilegeAuditLogDto>>;
    /** Exports the privilege catalog. */
    exportPrivilegeMatrix(params?: {
        format?: string;
    }): Promise<void>;
    /** Approves a self-service privilege request. */
    approvePrivilegeRequest(requestId: string, data: DecidePrivilegeRequest): Promise<void>;
    /** Denies a self-service privilege request. */
    denyPrivilegeRequest(requestId: string, data: DecidePrivilegeRequest): Promise<void>;
    /** Requests temporary additional privilege access. */
    createPrivilegeRequest(data: CreatePrivilegeAccessRequest): Promise<string>;
    /** Gets the authenticated user's current privileges. */
    getMyPrivileges(): Promise<Array<UserEffectivePrivilegeDto>>;
}

declare class ProductModuleApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a new product. */
    createProduct(data: CreateProductRequest): Promise<ProductResponseDto>;
    /** Gets a product by identifier. */
    getProductById(id: string): Promise<ProductResponseDto>;
}

declare class ProductivityModuleEventsApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a calendar event. */
    createEvent(data: CreateEventRequest): Promise<void>;
    /** Gets a calendar view. */
    getCalendarView(params?: {
        view?: string;
        date?: string;
        start?: string;
        end?: string;
    }): Promise<void>;
    /** Checks attendee availability. */
    checkAvailability(data: CheckAvailabilityRequest): Promise<void>;
    /** Responds to an invitation. */
    respondToEvent(eventId: string, data: RespondToEventRequest): Promise<void>;
    /** Exports calendar data to iCal. */
    exportCalendarIcal(): Promise<void>;
    /** Suggests meeting times. */
    suggestMeetingTimes(data: SuggestMeetingTimesRequest): Promise<void>;
}

declare class ProductivityModuleNotesApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a note. */
    createNote(data: CreateNoteRequest): Promise<void>;
    /** Gets notes. */
    getNotes(params?: {
        category?: string;
        tag?: string;
        notebookId?: string;
        isPinned?: boolean;
        isFavorite?: boolean;
        search?: string;
        page?: number;
        pageSize?: number;
    }): Promise<void>;
    /** Searches notes. */
    searchNotes(params?: {
        q?: string;
        in?: string;
    }): Promise<void>;
    /** Updates a note. */
    updateNote(noteId: string, data: UpdateNoteRequest): Promise<void>;
    /** Shares a note. */
    shareNote(noteId: string, data: ShareNoteRequest): Promise<void>;
    /** Gets note versions. */
    getNoteVersions(noteId: string): Promise<void>;
    /** Exports a note. */
    exportNote(noteId: string, params?: {
        format?: string;
    }): Promise<void>;
    /** Converts a note to a todo. */
    convertNoteToTodo(noteId: string): Promise<void>;
    /** Creates a notebook. */
    createNotebook(data: CreateNotebookRequest): Promise<void>;
}

declare class ProductivityModuleRemindersApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a reminder. */
    createReminder(data: CreateReminderRequest): Promise<void>;
    /** Gets reminders. */
    getReminders(params?: {
        from?: string;
        to?: string;
        type?: ReminderType;
        status?: ReminderStatus;
    }): Promise<void>;
    /** Snoozes a reminder. */
    snoozeReminder(reminderId: string, data: SnoozeReminderRequest): Promise<void>;
    /** Dismisses a reminder. */
    dismissReminder(reminderId: string): Promise<void>;
    /** Triggers a reminder immediately for testing. */
    testReminder(reminderId: string): Promise<void>;
}

declare class ProductivityModuleReportsApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Gets a productivity report. */
    getProductivityReport(params?: {
        period?: string;
        start?: string;
        end?: string;
    }): Promise<void>;
}

declare class ProductivityModuleSmartViewsApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Performs global productivity search. */
    globalProductivitySearch(params?: {
        q?: string;
        types?: string;
    }): Promise<void>;
    /** Gets the productivity dashboard. */
    getProductivityDashboardToday(): Promise<void>;
    /** Creates a smart list. */
    createSmartList(data: CreateSmartListRequest): Promise<void>;
}

declare class ProductivityModuleTasksApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a task. */
    createTask(data: CreateTaskRequest): Promise<void>;
    /** Gets the task board. */
    getTaskBoard(params?: {
        projectId?: string;
    }): Promise<void>;
    /** Updates task status. */
    updateTaskStatus(taskId: string, data: UpdateTaskStatusRequest): Promise<void>;
    /** Adds a task time entry. */
    addTimeEntry(taskId: string, data: AddTimeEntryRequest): Promise<void>;
    /** Gets task dependencies. */
    getTaskDependencyGraph(taskId: string): Promise<void>;
}

declare class ProductivityModuleTemplatesApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a reusable productivity template. */
    createTemplate(data: CreateTemplateRequest): Promise<void>;
    /** Instantiates a template. */
    instantiateTemplate(templateId: string): Promise<void>;
}

declare class ProductivityModuleTodosApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a todo. */
    createTodo(data: CreateTodoRequest): Promise<void>;
    /** Gets todos with advanced filtering. */
    getTodos(params?: {
        Status?: TodoStatus;
        Priority?: Priority;
        Category?: string;
        Tag?: string;
        DueDateFrom?: string;
        DueDateTo?: string;
        AssignedTo?: string;
        Search?: string;
        SortBy?: string;
        SortDirection?: string;
        Page?: number;
        PageSize?: number;
    }): Promise<void>;
    /** Gets a todo by id. */
    getTodoById(todoId: string): Promise<void>;
    /** Updates a todo. */
    updateTodo(todoId: string, data: UpdateTodoRequest): Promise<void>;
    /** Soft deletes or restores a todo. */
    deleteOrRestoreTodo(todoId: string, params?: {
        restore?: boolean;
    }): Promise<void>;
    /** Marks a todo as complete. */
    completeTodo(todoId: string): Promise<void>;
    /** Reopens a completed todo. */
    uncompleteTodo(todoId: string): Promise<void>;
    /** Converts a todo to a task. */
    convertTodoToTask(todoId: string): Promise<void>;
    /** Creates a reminder from a todo. */
    createReminderFromTodo(todoId: string, data: CreateReminderFromEntityRequest): Promise<void>;
}

declare class SchedulerModuleApi {
    private readonly client;
    constructor(client: AxiosInstance);
    /** Creates a scheduler job. */
    createSchedulerJob(data: CreateSchedulerJobRequest): Promise<JobDto>;
    /** Gets scheduler jobs. */
    getSchedulerJobs(params?: {
        pageNumber?: number;
        pageSize?: number;
        jobType?: JobType;
        status?: string;
        tag?: string;
        search?: string;
        sortBy?: string;
        sortDirection?: string;
    }): Promise<JobDtoPagedResponseDto>;
    /** Gets a scheduler job by id. */
    getSchedulerJobById(jobId: string): Promise<JobDto>;
    /** Updates a scheduler job. */
    updateSchedulerJob(jobId: string, data: UpdateSchedulerJobRequest): Promise<JobDto>;
    /** Deletes a scheduler job. */
    deleteSchedulerJob(jobId: string, params?: {
        hardDelete?: boolean;
    }): Promise<void>;
    /** Reschedules a scheduler job. */
    rescheduleSchedulerJob(jobId: string, data: RescheduleSchedulerJobRequest): Promise<JobDto>;
    /** Pauses a scheduler job. */
    pauseSchedulerJob(jobId: string): Promise<void>;
    /** Resumes a scheduler job. */
    resumeSchedulerJob(jobId: string): Promise<void>;
    /** Triggers a job immediately. */
    triggerSchedulerJob(jobId: string): Promise<void>;
    /** Gets executions for a job. */
    getSchedulerJobExecutions(jobId: string, params?: {
        pageNumber?: number;
        pageSize?: number;
        status?: ExecutionStatus;
        fromDate?: string;
        toDate?: string;
    }): Promise<JobExecutionDtoPagedResponseDto>;
    /** Gets execution details. */
    getSchedulerExecutionDetails(executionId: string): Promise<JobExecutionDto>;
    /** Cancels a running execution. */
    cancelSchedulerExecution(executionId: string): Promise<void>;
    /** Retries a failed execution. */
    retrySchedulerExecution(executionId: string): Promise<void>;
    /** Adds exclusion rules to a job. */
    addSchedulerJobExclusions(jobId: string, data: AddJobExclusionRequest): Promise<void>;
    /** Adds dependency rules to a job. */
    addSchedulerJobDependencies(jobId: string, data: AddJobDependencyRequest): Promise<void>;
    /** Creates a scheduler workflow definition. */
    createSchedulerWorkflow(data: CreateWorkflowRequest): Promise<string>;
    /** Gets dashboard statistics. */
    getSchedulerDashboardStats(): Promise<DashboardStatsDto>;
    /** Gets jobs with repeated failures. */
    getSchedulerFailedJobs(params?: {
        threshold?: number;
    }): Promise<Array<JobDto>>;
    /** Gets execution timeline data. */
    getSchedulerExecutionTimeline(params?: {
        hours?: number;
    }): Promise<Array<TimelinePointDto>>;
    /** Pauses all jobs. */
    pauseAllSchedulerJobs(): Promise<void>;
    /** Resumes all jobs. */
    resumeAllSchedulerJobs(): Promise<void>;
    /** Clears old execution logs. */
    clearSchedulerExecutionLogs(data: ClearExecutionLogsRequest): Promise<number>;
    /** Exports job configurations. */
    exportSchedulerJobs(): Promise<void>;
    /** Imports job configurations. */
    importSchedulerJobs(data: ImportSchedulerJobsRequest): Promise<number>;
}

interface AlphabetClientConfig {
    /** Base URL of the API, e.g. https://api.example.com */
    baseURL: string;
    /** JWT bearer token – set after login via setAccessToken() */
    accessToken?: string;
    /** Called when a 401 is received – implement token refresh or logout here */
    onUnauthorized?: () => void;
    /** Additional axios config merged on top of defaults */
    axiosConfig?: AxiosRequestConfig;
}
declare class AlphabetClient {
    private config;
    private readonly axiosInstance;
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
    constructor(config: AlphabetClientConfig);
    /** Update the bearer token (e.g. after login or token refresh) */
    setAccessToken(token: string): void;
    /** Remove the bearer token (e.g. on logout) */
    clearAccessToken(): void;
}

export { type AddJobDependencyRequest, type AddJobExclusionRequest, type AddTimeEntryRequest, type Address, type AdjustLeaveBalanceRequest, type AdminCreateUserRequest, type AdminLockUserRequest, type AdminResetPasswordRequest, type AdminUserDetailDto, AlphabetClient, type AlphabetClientConfig, type ApprovalChainApplicability, type ApprovalDecisionRequest, type ApprovalLevelDefinition, type AssetAssignmentType, type AssetCondition, type AssetLocationType, type AssetMaintenancePriority, type AssetMaintenanceType, type AssetStatus, type AssignAssetRequest, type AssignPolicyRequest, type AssignRolePrivilegesRequest, type AssignUserPrivilegeRequest, type AuditLogDto, type AuthResponseDto, type AuthenticatorSetupDto, type AvailabilityDateRange, type BatchApprovalRequest, type BatchPrivilegeCheckRequest, type BulkRolePrivilegeRequest, type CancelLeaveRequest, type ChangePasswordCommand, type CheckAvailabilityRequest, type ClearExecutionLogsRequest, type CommunicationBatchResponseDto, type CommunicationConfigurationDto, type CommunicationDeliveryResultDto, type CompleteMaintenanceRequest, type ConfirmEmailCommand, type Coordinates, type CreateAccrualRuleRequest, type CreateApprovalChainRequest, type CreateAssetCategoryRequest, type CreateAssetRequest, type CreateBlackoutPeriodRequest, type CreateDelegationRequest, type CreateEventRequest, type CreateLeaveTypeRequest, type CreateLocationRequest, type CreateNoteRequest, type CreateNotebookRequest, type CreatePrivilegeAccessRequest, type CreatePrivilegeCategoryRequest, type CreatePrivilegePolicyRequest, type CreatePrivilegeRequest, type CreateProductRequest, type CreatePublicHolidayRequest, type CreateReminderFromEntityRequest, type CreateReminderRequest, type CreateSchedulerJobRequest, type CreateSmartListRequest, type CreateTaskRequest, type CreateTemplateRequest, type CreateTodoRequest, type CreateWorkflowDefinitionRequest, type CreateWorkflowDefinitionStepRequest, type CreateWorkflowJobRequest, type CreateWorkflowRequest, type CurrentUserDto, type DashboardStatsDto, type DayOfWeek, type DecidePrivilegeRequest, type EnableOtpCommand, type EventVisibility, type ExecutionStatus, type ForgotPasswordCommand, type GenerateAuditReportRequest, type ImportSchedulerJobsRequest, type InitializeLeaveBalanceRequest, type InitializeLeaveBalanceRequestItem, type JobConfigurationDto, type JobDto, type JobDtoPagedResponseDto, type JobExecutionDto, type JobExecutionDtoPagedResponseDto, type JobType, type LeaveAccrualMethod, type LeaveApproverType, type LeaveAutoApproveRules, type LeaveBlackoutDate, type LeaveDayPart, type LeaveDelegationPermission, type LeaveDelegationType, type LeaveEligibilityRules, type LeavePartialDays, type LeaveSuggestedDateRange, type LoginRequest, type LogoutRequest, type MfaLoginRequest, type ModifyLeaveRequest, type MoveAssetRequest, type MovePrivilegeCategoryRequest, type NoteFormat, type Priority, type PrivilegeAction, type PrivilegeAnalyticsDto, type PrivilegeAssignmentDto, type PrivilegeAssignmentTrendDto, type PrivilegeAuditLogDto, type PrivilegeCategoryDto, type PrivilegeCheckResultDto, type PrivilegeDto, type PrivilegeDtoPagedResponseDto, type PrivilegeEffect, type PrivilegePolicyCondition, type PrivilegeUsageMetricDto, type ProblemDetails, type ProductResponseDto, type RecoveryCodesDto, type RecurrencePattern, type RefreshTokenRequest, type RegisterCommand, type RejectLeaveRequest, type ReminderStatus, type ReminderType, type RequestChangesRequest, type RescheduleSchedulerJobRequest, type ResetPasswordCommand, type RespondToEventRequest, type RetireAssetRequest, type RetryBackoffType, type RetryPolicyDto, type ScheduleMaintenanceRequest, type ScheduleType, type SendCommunicationCommand, type ShareNoteRequest, type SnoozeReminderRequest, type StartWorkflowRequest, type StockAdjustmentRequest, type StockAdjustmentType, type StockTakeCountedItemRequest, type StockTakeRequest, type SubmitLeaveRequest, type SuggestMeetingTimesRequest, type TaskStatus, type TimeRangeDto, type TimelinePointDto, type TodoChecklistItem, type TodoStatus, type TransferAssetRequest, type TwoFactorMethod, type UnassignAssetRequest, type UpcomingExecutionDto, type UpdateAssetRequest, type UpdateLeaveTypeRequest, type UpdateNoteRequest, type UpdatePrivilegeRequest, type UpdateSchedulerJobRequest, type UpdateTaskStatusRequest, type UpdateTodoRequest, type UserDto, type UserEffectivePrivilegeDto, type VerifyAuthenticatorCommand, type VerifyOtpCommand, type WorkflowStepActionRequest, type WorkingHoursRequest };
