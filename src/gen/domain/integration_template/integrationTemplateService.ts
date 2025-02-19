/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { IntegrationTemplateRoute } from '../../routes/Routes';
import { IntegrationTemplate } from './IntegrationTemplate';
import { IntegrationTemplateApi } from './IntegrationTemplateApi';

export const integrationTemplateGetMany = (
  queryParams?: QueryParams<IntegrationTemplate>
): Promise<ResourceList<IntegrationTemplateApi>> => {
  const config: QueryParams<IntegrationTemplate> = {
    method: 'get',
    url: queryParams?.url || IntegrationTemplateRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<IntegrationTemplateApi>>(config)
    : getResponse<ResourceList<IntegrationTemplateApi>, IntegrationTemplate>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationTemplateGetOne = (
  id: number,
  queryParams?: QueryParams<IntegrationTemplate>
): Promise<IntegrationTemplateApi> => {
  const config: QueryParams<IntegrationTemplate> = {
    method: 'get',
    url: `${queryParams?.url || IntegrationTemplateRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplateApi>(config)
    : getResponse<IntegrationTemplateApi, IntegrationTemplate>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationTemplateDeleteOne = (
  id: number,
  queryParams?: QueryParams<IntegrationTemplate>
): Promise<MessageResponse> => {
  const config: QueryParams<IntegrationTemplate> = {
    method: 'delete',
    url: `${queryParams?.url || IntegrationTemplateRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, IntegrationTemplate>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationTemplateUpdateOne = (
  id: number,
  data: Partial<IntegrationTemplate>,
  queryParams?: QueryParams<IntegrationTemplate>
): Promise<IntegrationTemplate> => {
  const config: QueryParams<IntegrationTemplate> = {
    method: 'put',
    url: `${queryParams?.url || IntegrationTemplateRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplate>(config)
    : getResponse<IntegrationTemplate>(
        queryParams?.api || _client?.api,
        config
      );
};

export const integrationTemplateCreateOne = (
  data: Partial<IntegrationTemplate>,
  queryParams?: QueryParams<IntegrationTemplate>
): Promise<IntegrationTemplate> => {
  const config: QueryParams<IntegrationTemplate> = {
    method: 'post',
    url: queryParams?.url || IntegrationTemplateRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<IntegrationTemplate>(config)
    : getResponse<IntegrationTemplate>(
        queryParams?.api || _client?.api,
        config
      );
};
