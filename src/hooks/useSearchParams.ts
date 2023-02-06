import { useCallback, useEffect, useMemo, useRef } from 'react';

const DEFAULT_PAGE = 1;

/**
 * Defailt search param fields
 */
export type UseSearchParams<
  T extends Record<string, any>,
  R extends Record<string, any> = any,
> = {
  /**
   * Default search param field
   */
  search?: string;
  /**
   * Default pagination param field
   */
  page?: number;
} & Omit<T, keyof R> &
  R;

/**
 * UseSearchParams options
 */
export interface UseSearchParamsOptions<T, R> {
  /**
   * Current params search and filter params
   */
  params?: T;
  /**
   * Function to serialize params
   */
  serialize?: (params: Partial<T>) => R;
  /**
   * Callback to call on params change
   */
  onChangeParams: (params: T) => void;
}

const defaultParams = {
  search: '',
  page: DEFAULT_PAGE,
};

/**
 * Hook to create logic for search and filter lists
 *
 * @param options - Hook options
 */
export function useSearchParams<T extends Record<string, any>, R>({
  params = {} as any,
  serialize,
  onChangeParams,
}: UseSearchParamsOptions<UseSearchParams<T>, R>) {
  const paramsRef = useRef(params);

  const currentParams = useMemo(
    () => ({ ...defaultParams, ...params }),
    [params],
  );

  const handleChangeSearch = useCallback(
    (search: string) => {
      onChangeParams({ ...paramsRef.current, search, page: DEFAULT_PAGE });
    },
    [onChangeParams],
  );

  const handleChangePage = useCallback(
    (page: number) => {
      onChangeParams({ ...paramsRef.current, page });
    },
    [onChangeParams],
  );

  const handleChangeParams = useCallback(
    (newParams: T) => {
      onChangeParams({
        ...paramsRef.current,
        ...newParams,
        page: DEFAULT_PAGE,
      });
    },
    [onChangeParams],
  );

  const serializedParams = useMemo(
    () => serialize?.({ ...currentParams, page: undefined }),
    [currentParams, serialize],
  );

  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  const { page, ...other } = currentParams;
  return {
    page: Number(page || DEFAULT_PAGE),
    params: other,
    serializedParams,
    handleChangePage,
    handleChangeParams,
    handleChangeSearch,
  };
}
