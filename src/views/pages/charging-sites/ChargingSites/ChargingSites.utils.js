import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const chargingSitesItems = [
  {
    id: 1,
    name: 'name',
    address: 'address',
    team: 'basic',
    smartQueue: 'Not enabled',
    loadBalancing: 'Not enabled',
    state: 'available',
  },
  {
    id: 2,
    name: 'name2',
    address: 'address',
    team: 'basic',
    smartQueue: 'Not enabled',
    loadBalancing: 'Not enabled',
    state: 'available',
  },
  {
    id: 3,
    name: 'name3',
    address: 'address',
    team: 'basic',
    smartQueue: 'Not enabled',
    loadBalancing: 'Not enabled',
    state: 'available',
  },
];

export const states = [
  {
    label: 'Available',
    value: 'available',
  },
  {
    label: 'Not available',
    value: 'notAvailable',
  },
];

export const useChargingSites = () => {
  const chargingSites = useSelector(
    (state) => state.chargingSites.chargingSites,
  );
  console.log(chargingSites);

  const [searchValue, setSearchValue] = useState('');

  const filteredChargingSites = useMemo(() => {
    return chargingSites.filter(({ name }) => name.includes(searchValue));
  }, [searchValue, chargingSites]);

  const onSearchChange = (e) => setSearchValue(e.target.value);

  const onSearchClear = () => setSearchValue('');

  return {
    chargingSites: filteredChargingSites,
    searchValue,
    onSearchChange,
    onSearchClear,
  };
};
