/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Product } from './Product';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import { CouponApi } from '../coupon/CouponApi';

export interface ProductApi extends Product {
  subscriptions?: SubscriptionsApi[];
  coupon?: CouponApi[];
}
