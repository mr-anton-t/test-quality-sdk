/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { TenantScopedModel } from '../../models/TenantScopedModel';

export interface PlanPullRequest extends TenantScopedModel {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  epoch: number;
  client_id: number;
  pull_request_id: number;
  plan_id: number;
}
