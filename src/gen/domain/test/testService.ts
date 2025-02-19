/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { TestRoute } from '../../routes/Routes';
import { Test } from './Test';
import { TestApi } from './TestApi';

export const testGetMany = (
  queryParams?: QueryParams<Test>
): Promise<ResourceList<TestApi>> => {
  const config: QueryParams<Test> = {
    method: 'get',
    url: queryParams?.url || TestRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<TestApi>>(config)
    : getResponse<ResourceList<TestApi>, Test>(
        queryParams?.api || _client?.api,
        config
      );
};

export const testGetOne = (
  id: number,
  queryParams?: QueryParams<Test>
): Promise<TestApi> => {
  const config: QueryParams<Test> = {
    method: 'get',
    url: `${queryParams?.url || TestRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<TestApi>(config)
    : getResponse<TestApi, Test>(queryParams?.api || _client?.api, config);
};

export const testDeleteOne = (
  id: number,
  queryParams?: QueryParams<Test>
): Promise<MessageResponse> => {
  const config: QueryParams<Test> = {
    method: 'delete',
    url: `${queryParams?.url || TestRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Test>(
        queryParams?.api || _client?.api,
        config
      );
};

export const testUpdateOne = (
  id: number,
  data: Partial<Test>,
  queryParams?: QueryParams<Test>
): Promise<Test> => {
  const config: QueryParams<Test> = {
    method: 'put',
    url: `${queryParams?.url || TestRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<Test>(queryParams?.api || _client?.api, config);
};

export const testCreateOne = (
  data: Partial<Test>,
  queryParams?: QueryParams<Test>
): Promise<Test> => {
  const config: QueryParams<Test> = {
    method: 'post',
    url: queryParams?.url || TestRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Test>(config)
    : getResponse<Test>(queryParams?.api || _client?.api, config);
};
