/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { SharedPreconditionRoute } from '../../routes/Routes';
import { SharedPrecondition } from './SharedPrecondition';
import { SharedPreconditionHistory } from './SharedPreconditionHistory';

export const sharedPreconditionHistoryGet = (
  queryParams?: QueryParams<SharedPrecondition>
): Promise<SharedPreconditionHistory[]> => {
  const config: QueryParams<SharedPrecondition> = {
    method: 'get',
    url: `${queryParams?.url || SharedPreconditionRoute()}${
      queryParams?.id ? `/${queryParams?.id}` : ''
    }`,
    params: { revision_log: true, ...queryParams?.params },
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<SharedPreconditionHistory[]>(config)
    : getResponse<SharedPreconditionHistory[], SharedPrecondition>(
        queryParams?.api || _client?.api,
        config
      );
};
