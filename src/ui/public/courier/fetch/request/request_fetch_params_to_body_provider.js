import { requestFetchParamsToBody } from './request_fetch_params_to_body';

export function RequestFetchParamsToBodyProvider(Promise, timefilter, kbnIndex, sessionId, config) {
  return (requestsFetchParams) => (
    requestFetchParamsToBody(
      requestsFetchParams,
      Promise,
      timefilter,
      kbnIndex,
      sessionId,
      config)
  );
}
