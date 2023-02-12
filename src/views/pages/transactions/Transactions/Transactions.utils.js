import { useEffect, useMemo, useState } from 'react';
import { useTransactionsFilter } from '../../../../features/transactions/hooks';

export const useTransactions = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValues, setFilterValues] = useState({});
  const [filterChargePoints, setFilterChargePoints] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const query = useTransactionsFilter({
    route: '/charge-points',
    enabled: true,
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
    return filterChargePoints?.filter(
      ({ device }) =>
        device?.chargePointModel?.includes(searchValue) || !searchValue,
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
    filteredChargePoints: query?.data?.items,
    filterValues,
    searchValue,
    open,
    total: query?.data?.total,
    error: query?.error,
    isLoading: query?.isLoading,
    page: query?.page,
    hasNextPage: query?.hasNextPage,
    hasPrevPage: query?.hasPrevPage,
    handleToggle,
    handleChange,
    onSearchChange,
    onSearchClear,
    handlePageChange,
    handleChangePage: (index) => {
      query?.handleChangePage(index);
      query?.refetch();
    },
  };
};
