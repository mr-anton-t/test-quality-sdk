/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { User } from './User';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import { SubscriptionUserApi } from '../subscription_user/SubscriptionUserApi';
import { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import { AccessRoleApi } from '../access_role/AccessRoleApi';
import { NotificationsApi } from '../notifications/NotificationsApi';
import { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { BillingContactApi } from '../billing_contact/BillingContactApi';

export interface UserApi extends User {
  subscriptions?: SubscriptionsApi[];
  subscription_user?: SubscriptionUserApi[];
  access_role?: AccessRoleApi[];
  access_role_id?: number; // This field is required during create
  notifications?: NotificationsApi;
  integration?: IntegrationApi[];
  billing_contact?: BillingContactApi[];
  pivot?: AccessRoleUserApi | IntegrationUserApi;
  access_role_user?: Partial<AccessRoleUserApi>;
  integration_user?: Partial<IntegrationUserApi>;
}
