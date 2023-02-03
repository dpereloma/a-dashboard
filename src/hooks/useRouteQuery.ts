import { useMemo } from 'react';
import { useLocation } from 'react-router';

export function useRouteQuery() {
  const { search } = useLocation();
  const queries = useMemo(() => new URLSearchParams(search), [search]);
  return queries;
}
