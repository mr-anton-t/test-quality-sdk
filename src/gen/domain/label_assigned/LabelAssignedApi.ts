/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { LabelAssigned } from './LabelAssigned';
import { LabelApi } from '../label/LabelApi';
import { RunApi } from '../run/RunApi';
import { SuiteApi } from '../suite/SuiteApi';
import { TestApi } from '../test/TestApi';
import { ProjectApi } from '../project/ProjectApi';
import { CaseTypeApi } from '../case_type/CaseTypeApi';
import { CasePriorityApi } from '../case_priority/CasePriorityApi';
import { PlanApi } from '../plan/PlanApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { StepApi } from '../step/StepApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { StatusApi } from '../status/StatusApi';
import { PurposeApi } from '../purpose/PurposeApi';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { StatusTypeApi } from '../status_type/StatusTypeApi';
import { TestQualityApi } from '../test_quality/TestQualityApi';
import { TestQualityTypeApi } from '../test_quality_type/TestQualityTypeApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';

export interface LabelAssignedApi extends LabelAssigned {
  label?: LabelApi;
  run?: RunApi;
  suite?: SuiteApi;
  test?: TestApi;
  project?: ProjectApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  plan?: PlanApi;
  run_result?: RunResultApi;
  step?: StepApi;
  run_result_step?: RunResultStepApi;
  status?: StatusApi;
  purpose?: PurposeApi;
  milestone?: MilestoneApi;
  status_type?: StatusTypeApi;
  test_quality?: TestQualityApi;
  test_quality_type?: TestQualityTypeApi;
  native_defect_res?: NativeDefectResApi;
  native_defect_status?: NativeDefectStatusApi;
}
