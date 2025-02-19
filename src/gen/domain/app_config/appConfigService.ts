/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { AppConfigRoute } from '../../routes/Routes';
import { AppConfig } from './AppConfig';
import { AppConfigApi } from './AppConfigApi';

export const appConfigGetMany = (
  queryParams?: QueryParams<AppConfig>
): Promise<ResourceList<AppConfigApi>> => {
  const config: QueryParams<AppConfig> = {
    method: 'get',
    url: queryParams?.url || AppConfigRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<AppConfigApi>>(config)
    : getResponse<ResourceList<AppConfigApi>, AppConfig>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appConfigGetOne = (
  id: number,
  queryParams?: QueryParams<AppConfig>
): Promise<AppConfigApi> => {
  const config: QueryParams<AppConfig> = {
    method: 'get',
    url: `${queryParams?.url || AppConfigRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppConfigApi>(config)
    : getResponse<AppConfigApi, AppConfig>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appConfigDeleteOne = (
  id: number,
  queryParams?: QueryParams<AppConfig>
): Promise<MessageResponse> => {
  const config: QueryParams<AppConfig> = {
    method: 'delete',
    url: `${queryParams?.url || AppConfigRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, AppConfig>(
        queryParams?.api || _client?.api,
        config
      );
};

export const appConfigUpdateOne = (
  id: number,
  data: Partial<AppConfig>,
  queryParams?: QueryParams<AppConfig>
): Promise<AppConfig> => {
  const config: QueryParams<AppConfig> = {
    method: 'put',
    url: `${queryParams?.url || AppConfigRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppConfig>(config)
    : getResponse<AppConfig>(queryParams?.api || _client?.api, config);
};

export const appConfigCreateOne = (
  data: Partial<AppConfig>,
  queryParams?: QueryParams<AppConfig>
): Promise<AppConfig> => {
  const config: QueryParams<AppConfig> = {
    method: 'post',
    url: queryParams?.url || AppConfigRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<AppConfig>(config)
    : getResponse<AppConfig>(queryParams?.api || _client?.api, config);
};
