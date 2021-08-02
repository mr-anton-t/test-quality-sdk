/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { StatusTypeRoute } from '../../routes/Routes';
import { StatusType } from './StatusType';
import { StatusTypeApi } from './StatusTypeApi';

export const statusTypeGetMany = (
  queryParams?: QueryParams<StatusType>
): Promise<ResourceList<StatusTypeApi>> => {
  const config: QueryParams<StatusType> = {
    method: 'get',
    url: queryParams?.url || StatusTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<StatusTypeApi>>(config)
    : getResponse<ResourceList<StatusTypeApi>, StatusType>(
        queryParams?.api || _client?.api,
        config
      );
};

export const statusTypeGetOne = (
  id: number,
  queryParams?: QueryParams<StatusType>
): Promise<StatusTypeApi> => {
  const config: QueryParams<StatusType> = {
    method: 'get',
    url: `${queryParams?.url || StatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusTypeApi>(config)
    : getResponse<StatusTypeApi, StatusType>(
        queryParams?.api || _client?.api,
        config
      );
};

export const statusTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<StatusType>
): Promise<MessageResponse> => {
  const config: QueryParams<StatusType> = {
    method: 'delete',
    url: `${queryParams?.url || StatusTypeRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, StatusType>(
        queryParams?.api || _client?.api,
        config
      );
};

export const statusTypeUpdateOne = (
  id: number,
  data: Partial<StatusType>,
  queryParams?: QueryParams<StatusType>
): Promise<StatusType> => {
  const config: QueryParams<StatusType> = {
    method: 'put',
    url: `${queryParams?.url || StatusTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusType>(config)
    : getResponse<StatusType>(queryParams?.api || _client?.api, config);
};

export const statusTypeCreateOne = (
  data: Partial<StatusType>,
  queryParams?: QueryParams<StatusType>
): Promise<StatusType> => {
  const config: QueryParams<StatusType> = {
    method: 'post',
    url: queryParams?.url || StatusTypeRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<StatusType>(config)
    : getResponse<StatusType>(queryParams?.api || _client?.api, config);
};
