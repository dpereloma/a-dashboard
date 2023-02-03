import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouteQuery } from './useRouteQuery';
import { serializedQueryParams } from 'helpers';

/**
 * UseRouteQueryParams options
 */
export interface UseRouteQueryParamsOptions {
  /**
   * Route to navigate on params change
   */
  route: string;
}

/**
 * Hook to change URL query params
 *
 * @param options - Hook options
 */
export function useRouteQueryParams({ route }: UseRouteQueryParamsOptions) {
  const navigate = useNavigate();
  const routeQueryParams = useRouteQuery();

  /**
   * Handle params changes
   *
   * @param params - Route query params
   */
  const handleChangeParams = useCallback(
    (params: any) => {
      const queryStr = new URLSearchParams(
        serializedQueryParams(params),
      ).toString();
      navigate(queryStr);
    },
    [navigate],
  );

  /**
   * Params from URL, need for first load to sync params
   */
  const params = useMemo(() => {
    return Object.fromEntries(routeQueryParams.entries());
  }, [routeQueryParams]);

  return { params, handleChangeParams };
}
