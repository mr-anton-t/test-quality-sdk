/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { SharedStepRoute } from '../../routes/Routes';
import { SharedStep } from './SharedStep';
import { SharedStepApi } from './SharedStepApi';

export const sharedStepGetMany = (
  queryParams?: QueryParams<SharedStep>
): Promise<ResourceList<SharedStepApi>> => {
  const config: QueryParams<SharedStep> = {
    method: 'get',
    url: queryParams?.url || SharedStepRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<SharedStepApi>>(config)
    : getResponse<ResourceList<SharedStepApi>, SharedStep>(
        queryParams?.api || _client?.api,
        config
      );
};

export const sharedStepGetOne = (
  id: number,
  queryParams?: QueryParams<SharedStep>
): Promise<SharedStepApi> => {
  const config: QueryParams<SharedStep> = {
    method: 'get',
    url: `${queryParams?.url || SharedStepRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStepApi>(config)
    : getResponse<SharedStepApi, SharedStep>(
        queryParams?.api || _client?.api,
        config
      );
};

export const sharedStepDeleteOne = (
  id: number,
  queryParams?: QueryParams<SharedStep>
): Promise<MessageResponse> => {
  const config: QueryParams<SharedStep> = {
    method: 'delete',
    url: `${queryParams?.url || SharedStepRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, SharedStep>(
        queryParams?.api || _client?.api,
        config
      );
};

export const sharedStepUpdateOne = (
  id: number,
  data: Partial<SharedStep>,
  queryParams?: QueryParams<SharedStep>
): Promise<SharedStep> => {
  const config: QueryParams<SharedStep> = {
    method: 'put',
    url: `${queryParams?.url || SharedStepRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStep>(config)
    : getResponse<SharedStep>(queryParams?.api || _client?.api, config);
};

export const sharedStepCreateOne = (
  data: Partial<SharedStep>,
  queryParams?: QueryParams<SharedStep>
): Promise<SharedStep> => {
  const config: QueryParams<SharedStep> = {
    method: 'post',
    url: queryParams?.url || SharedStepRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedStep>(config)
    : getResponse<SharedStep>(queryParams?.api || _client?.api, config);
};
