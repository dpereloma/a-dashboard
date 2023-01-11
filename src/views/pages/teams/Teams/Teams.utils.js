import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const teamsItems = [
  {
    id: 1,
    name: 'name',
    code: 'code',
    plan: 'basic',
    members: 2,
    chargePoints: 3,
    wallet: 0,
  },
  {
    id: 2,
    name: 'name',
    code: 'code',
    plan: 'basic',
    members: 2,
    chargePoints: 3,
    wallet: 0,
  },
  {
    id: 3,
    name: 'name',
    code: 'code',
    plan: 'basic',
    members: 2,
    chargePoints: 3,
    wallet: 0,
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

export const useTeams = () => {
  const teams = useSelector((state) => state.teams.teams);

  const [searchValue, setSearchValue] = useState('');

  const filteredTeams = useMemo(() => {
    return teams.filter(({ name }) => name.includes(searchValue));
  }, [searchValue, teams]);

  const onSearchChange = (e) => setSearchValue(e.target.value);

  const onSearchClear = () => setSearchValue('');

  return {
    teams: filteredTeams,
    searchValue,
    onSearchChange,
    onSearchClear,
  };
};
