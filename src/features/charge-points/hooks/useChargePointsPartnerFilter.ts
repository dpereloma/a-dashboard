import { useRef } from 'react';

import { useRouteQueryParams, UseSearchParams, useSearchParams } from 'hooks';
import { Requests } from '../types';

import * as Helpers from 'helpers';
import { useChargePointsPartnerItemsQuery } from '../queries';
import { useLocation } from 'react-router';

const DEFAULT_PAGE = 1;

export type UsePromoCampaignPromoCodesFilterParams =
  UseSearchParams<Requests.ReqChargePointsPartnerItemsParams>;

const serializeParams = ({
  search,
  page,
  ...other
}: UsePromoCampaignPromoCodesFilterParams) => {
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
  params?: Requests.ReqChargePointsPartnerItemsParams;
  pagination?: Helpers.RequestPagination;
  onChangeParams?: (params: UsePromoCampaignPromoCodesFilterParams) => void;
}

export function useChargePointsPartnerFilter(
  partnerId: string,
  options?: UseChargePointsPartnerFilterOptions,
) {
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
    UsePromoCampaignPromoCodesFilterParams,
    Requests.ReqChargePointsPartnerItemsParams
  >({
    params: routeQueryParams as UsePromoCampaignPromoCodesFilterParams,
    serialize: (data: any) => serializeParams(data),
    onChangeParams: (newParams: any) => {
      handleChangeRouteParams(newParams);
      options?.onChangeParams?.(newParams);
    },
  });

  const query = useChargePointsPartnerItemsQuery(
    partnerId,
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
