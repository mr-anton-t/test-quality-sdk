/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { SharedPrecondition } from './SharedPrecondition';

export interface SharedPreconditionHistory extends SharedPrecondition {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}
