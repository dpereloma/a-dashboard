import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../../features/auth/hooks';
import { useChargePointsPartnerFilter } from '../../../../features/charge-points/hooks';
import { useChargePointsPartnerItemsQuery } from '../../../../features/partners/queries';

export const chargePointsItems = [
  {
    id: 1,
    name: 'name',
    code: 'code',
    site: 'site',
    pointState: 'active',
    connection: 'disconnected',
    accessibility: 'public',
    state: 'disconnected',
  },
  {
    id: 2,
    name: 'name1',
    code: 'code1',
    site: 'site',
    pointState: 'active',
    connection: 'disconnected',
    accessibility: 'public',
    state: 'connected',
  },
  {
    id: 3,
    name: 'name2',
    code: 'code2',
    site: 'site',
    pointState: 'inactive',
    connection: 'disconnected',
    accessibility: 'static',
    state: 'paused',
  },
];

export const states = [
  {
    label: 'Connected',
    value: 'connected',
  },
  {
    label: 'Disconnected',
    value: 'disconnected',
  },
  {
    label: 'Paused',
    value: 'paused',
  },
];

export const accessibilities = [
  {
    label: 'Public',
    value: 'public',
  },
  {
    label: 'Static',
    value: 'static',
  },
];

export const connections = [
  {
    label: 'Connected',
    value: 'connected',
  },
  {
    label: 'Disconnected',
    value: 'disconnected',
  },
  {
    label: 'Paused',
    value: 'paused',
  },
];

export const pointStates = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];

export const useChargePoints = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValues, setFilterValues] = useState({});
  const [filterChargePoints, setFilterChargePoints] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const { user } = useAuth();

  const { data: chargePointPartner } = useChargePointsPartnerItemsQuery(
    user?.id,
  );

  const query = useChargePointsPartnerFilter(chargePointPartner?.id, {
    route: '/charge-points',
    enabled: !!chargePointPartner,
  });

  // const { data, isError, isLoading } = useChargePointsPartnerItemsQuery(
  //   '89c81916-1fa9-4eb5-9af8-b1eec1c492ba',
  //   undefined,
  //   { page },
  // );

  const handleToggle = () => {
    setOpen(!open);
  };

  const filteredChargePoints = useMemo(() => {
    return filterChargePoints?.filter(({ device }) =>
      device?.chargePointModel?.includes(searchValue),
    );
  }, [searchValue, filterChargePoints]);

  const handleChange = (e) =>
    setFilterValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSearchChange = (e) => setSearchValue(e.target.value);

  const onSearchClear = () => setSearchValue('');

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    const filledFilterParams = Object.entries(filterValues).filter(
      ([, v]) => v && v !== '-',
    );
    if (filledFilterParams.length > 0) {
      const filteredChargePoints = query?.data?.items?.filter((item) => {
        const isValid = [];
        filledFilterParams.forEach(([k, v]) => {
          isValid.push(item[k] === v);
        });
        return !isValid.includes(false);
      });
      setFilterChargePoints(filteredChargePoints);
    } else {
      setFilterChargePoints(query?.data?.items);
    }
  }, [filterValues]);

  useEffect(() => {
    if (!filterChargePoints) {
      setFilterChargePoints(query?.data?.items);
    }
  }, [query?.data]);

  return {
    filteredChargePoints,
    filterValues,
    searchValue,
    open,
    total: query?.data?.total,
    isError: query?.isError,
    isLoading: query?.isLoading,
    page: query?.page,
    hasNextPage: query?.hasNextPage,
    hasPrevPage: query?.hasPrevPage,
    handleToggle,
    handleChange,
    onSearchChange,
    onSearchClear,
    handlePageChange,
    handleChangePage: query?.handleChangePage,
  };
};
