import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

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
  const chargePoints = useSelector((state) => state.chargePoints.chargePoints);

  const [searchValue, setSearchValue] = useState('');
  const [filterValues, setFilterValues] = useState({});
  const [filterChargePoints, setFilterChargePoints] = useState(chargePoints);

  const filteredChargePoints = useMemo(() => {
    return filterChargePoints.filter(({ name }) => name.includes(searchValue));
  }, [searchValue, filterChargePoints]);

  const handleChange = (e) =>
    setFilterValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSearchChange = (e) => setSearchValue(e.target.value);

  const onSearchClear = () => setSearchValue('');

  useEffect(() => {
    const filledFilterParams = Object.entries(filterValues).filter(
      ([, v]) => v && v !== '-',
    );
    if (filledFilterParams.length > 0) {
      const filteredChargePoints = chargePoints.filter((item) => {
        const isValid = [];
        filledFilterParams.forEach(([k, v]) => {
          isValid.push(item[k] === v);
        });
        return !isValid.includes(false);
      });
      setFilterChargePoints(filteredChargePoints);
    } else {
      setFilterChargePoints(chargePoints);
    }
  }, [filterValues]);

  return {
    filteredChargePoints,
    filterValues,
    searchValue,
    handleChange,
    onSearchChange,
    onSearchClear,
  };
};
