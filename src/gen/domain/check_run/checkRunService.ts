/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { CheckRunRoute } from '../../routes/Routes';
import { CheckRun } from './CheckRun';
import { CheckRunApi } from './CheckRunApi';

export const checkRunGetMany = (
  queryParams?: QueryParams<CheckRun>
): Promise<ResourceList<CheckRunApi>> => {
  const config: QueryParams<CheckRun> = {
    method: 'get',
    url: queryParams?.url || CheckRunRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CheckRunApi>>(config)
    : getResponse<ResourceList<CheckRunApi>, CheckRun>(
        queryParams?.api || _client?.api,
        config
      );
};

export const checkRunGetOne = (
  id: number,
  queryParams?: QueryParams<CheckRun>
): Promise<CheckRunApi> => {
  const config: QueryParams<CheckRun> = {
    method: 'get',
    url: `${queryParams?.url || CheckRunRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRunApi>(config)
    : getResponse<CheckRunApi, CheckRun>(
        queryParams?.api || _client?.api,
        config
      );
};

export const checkRunDeleteOne = (
  id: number,
  queryParams?: QueryParams<CheckRun>
): Promise<MessageResponse> => {
  const config: QueryParams<CheckRun> = {
    method: 'delete',
    url: `${queryParams?.url || CheckRunRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CheckRun>(
        queryParams?.api || _client?.api,
        config
      );
};

export const checkRunUpdateOne = (
  id: number,
  data: Partial<CheckRun>,
  queryParams?: QueryParams<CheckRun>
): Promise<CheckRun> => {
  const config: QueryParams<CheckRun> = {
    method: 'put',
    url: `${queryParams?.url || CheckRunRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRun>(config)
    : getResponse<CheckRun>(queryParams?.api || _client?.api, config);
};

export const checkRunCreateOne = (
  data: Partial<CheckRun>,
  queryParams?: QueryParams<CheckRun>
): Promise<CheckRun> => {
  const config: QueryParams<CheckRun> = {
    method: 'post',
    url: queryParams?.url || CheckRunRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CheckRun>(config)
    : getResponse<CheckRun>(queryParams?.api || _client?.api, config);
};
