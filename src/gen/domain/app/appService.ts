/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppRoute } from '../../routes/Routes';
import { App } from './App';
import { AppApi } from './AppApi';

export const appGetMany = (
  queryParams?: QueryParams<App>
): Promise<ResourceList<AppApi>> => {
  const config: QueryParams<App> = {
    method: 'get',
    url: queryParams?.url || AppRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppApi>>(config)
    : getResponse<ResourceList<AppApi>, App>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appGetOne = (
  id: number,
  queryParams?: QueryParams<App>
): Promise<AppApi> => {
  const config: QueryParams<App> = {
    method: 'get',
    url: `${queryParams?.url || AppRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppApi>(config)
    : getResponse<AppApi, App>(queryParams?.api || _client?.api, config);
};

export const appDeleteOne = (
  id: number,
  queryParams?: QueryParams<App>
): Promise<MessageResponse> => {
  const config: QueryParams<App> = {
    method: 'delete',
    url: `${queryParams?.url || AppRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, App>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appUpdateOne = (
  id: number,
  data: Partial<App>,
  queryParams?: QueryParams<App>
): Promise<App> => {
  const config: QueryParams<App> = {
    method: 'put',
    url: `${queryParams?.url || AppRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<App>(config)
    : getResponse<App>(queryParams?.api || _client?.api, config);
};

export const appCreateOne = (
  data: Partial<App>,
  queryParams?: QueryParams<App>
): Promise<App> => {
  const config: QueryParams<App> = {
    method: 'post',
    url: queryParams?.url || AppRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<App>(config)
    : getResponse<App>(queryParams?.api || _client?.api, config);
};
