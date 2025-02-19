/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PlatVersionRoute } from '../../routes/Routes';
import { PlatVersion } from './PlatVersion';
import { PlatVersionApi } from './PlatVersionApi';

export const platVersionGetMany = (
  queryParams?: QueryParams<PlatVersion>
): Promise<ResourceList<PlatVersionApi>> => {
  const config: QueryParams<PlatVersion> = {
    method: 'get',
    url: queryParams?.url || PlatVersionRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PlatVersionApi>>(config)
    : getResponse<ResourceList<PlatVersionApi>, PlatVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

export const platVersionGetOne = (
  id: number,
  queryParams?: QueryParams<PlatVersion>
): Promise<PlatVersionApi> => {
  const config: QueryParams<PlatVersion> = {
    method: 'get',
    url: `${queryParams?.url || PlatVersionRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlatVersionApi>(config)
    : getResponse<PlatVersionApi, PlatVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

export const platVersionDeleteOne = (
  id: number,
  queryParams?: QueryParams<PlatVersion>
): Promise<MessageResponse> => {
  const config: QueryParams<PlatVersion> = {
    method: 'delete',
    url: `${queryParams?.url || PlatVersionRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PlatVersion>(
        queryParams?.api || _client?.api,
        config
      );
};

export const platVersionUpdateOne = (
  id: number,
  data: Partial<PlatVersion>,
  queryParams?: QueryParams<PlatVersion>
): Promise<PlatVersion> => {
  const config: QueryParams<PlatVersion> = {
    method: 'put',
    url: `${queryParams?.url || PlatVersionRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlatVersion>(config)
    : getResponse<PlatVersion>(queryParams?.api || _client?.api, config);
};

export const platVersionCreateOne = (
  data: Partial<PlatVersion>,
  queryParams?: QueryParams<PlatVersion>
): Promise<PlatVersion> => {
  const config: QueryParams<PlatVersion> = {
    method: 'post',
    url: queryParams?.url || PlatVersionRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PlatVersion>(config)
    : getResponse<PlatVersion>(queryParams?.api || _client?.api, config);
};
