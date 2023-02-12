import { useRef } from 'react';

import { useRouteQueryParams, UseSearchParams, useSearchParams } from 'hooks';
import { Requests } from '../types';

import * as Helpers from 'helpers';
import { useTransactionsSearchQuery } from '../queries';
import { useLocation } from 'react-router';

const DEFAULT_PAGE = 1;

export type UseTransactionsFilterParams =
  UseSearchParams<Requests.ReqTransactionsItemsParams>;

const serializeParams = ({
  search,
  page,
  ...other
}: UseTransactionsFilterParams) => {
  const pageNumber = Number(page);
  const pageCurrent = !page || isNaN(pageNumber) ? DEFAULT_PAGE : Number(page);
  return {
    name: search,
    page: pageCurrent,
    ...other,
  };
};

export interface UseChargePointsPartnerFilterOptions {
  route: string;
  enabled?: boolean;
  params?: Requests.ReqTransactionsItemsParams;
  pagination?: Helpers.RequestPagination;
  onChangeParams?: (params: UseTransactionsFilterParams) => void;
}

export function useTransactionsFilter(options?: UseTransactionsFilterParams) {
  const optionsRef = useRef(options);
  const location = useLocation();

  const {
    params: routeQueryParams,
    handleChangeParams: handleChangeRouteParams,
  } = useRouteQueryParams({
    route: optionsRef.current?.route ?? '',
  });

  const pageParam = location?.pathname?.split('/')?.at(-1)?.split('=')?.[1];

  const {
    page,
    params,
    serializedParams,
    handleChangePage,
    handleChangeParams,
    handleChangeSearch,
  } = useSearchParams<
    UseTransactionsFilterParams,
    Requests.ReqTransactionsItemsParams
  >({
    params: routeQueryParams as UseTransactionsFilterParams,
    serialize: (data: any) => serializeParams(data),
    onChangeParams: (newParams: any) => {
      handleChangeRouteParams(newParams);
      options?.onChangeParams?.(newParams);
    },
  });

  const query = useTransactionsSearchQuery(
    Helpers.serializedQueryParams({ ...serializedParams, ...options?.params }),
    {
      size: 10,
      ...optionsRef.current?.pagination,
      page: pageParam ? Number(pageParam) : page,
    },
    { enabled: options?.enabled, refetchOnWindowFocus: false },
  );

  return {
    ...query,
    page: pageParam ? Number(pageParam) : page,
    params,
    handleChangePage,
    handleChangeSearch,
    handleChangeParams,
  };
}
