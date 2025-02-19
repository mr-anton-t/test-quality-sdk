/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PlanRoute } from '../../routes/Routes';
import { Plan } from './Plan';
import { PlanApi } from './PlanApi';

export const planGetMany = (
  queryParams?: QueryParams<Plan>
): Promise<ResourceList<PlanApi>> => {
  const config: QueryParams<Plan> = {
    method: 'get',
    url: queryParams?.url || PlanRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlanApi>>(config)
    : getResponse<ResourceList<PlanApi>, Plan>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planGetOne = (
  id: number,
  queryParams?: QueryParams<Plan>
): Promise<PlanApi> => {
  const config: QueryParams<Plan> = {
    method: 'get',
    url: `${queryParams?.url || PlanRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlanApi>(config)
    : getResponse<PlanApi, Plan>(queryParams?.api || _client?.api, config);
};

export const planDeleteOne = (
  id: number,
  queryParams?: QueryParams<Plan>
): Promise<MessageResponse> => {
  const config: QueryParams<Plan> = {
    method: 'delete',
    url: `${queryParams?.url || PlanRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Plan>(
        queryParams?.api || _client?.api,
        config
      );
};

export const planUpdateOne = (
  id: number,
  data: Partial<Plan>,
  queryParams?: QueryParams<Plan>
): Promise<Plan> => {
  const config: QueryParams<Plan> = {
    method: 'put',
    url: `${queryParams?.url || PlanRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api || _client?.api, config);
};

export const planCreateOne = (
  data: Partial<Plan>,
  queryParams?: QueryParams<Plan>
): Promise<Plan> => {
  const config: QueryParams<Plan> = {
    method: 'post',
    url: queryParams?.url || PlanRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Plan>(config)
    : getResponse<Plan>(queryParams?.api || _client?.api, config);
};
