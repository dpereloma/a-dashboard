import { useEffect, useMemo, useState } from 'react';

export const userRoles = [
  {
    label: 'Admin',
    value: 'admin',
  },
  {
    label: 'Team owner',
    value: 'teamOwner',
  },
];

export const priceGroups = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Discount',
    value: 'discount',
  },
];

export const accessToChargePoints = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'One',
    value: 'one',
  },
];

export const states = [
  {
    label: 'Accepted',
    value: 'accepted',
  },
  {
    label: 'Cancelled',
    value: 'cancelled',
  },
];

export const useMembersTab = (members) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValues, setFilterValues] = useState({});
  const [filterMembers, setFilterMembers] = useState(members);

  const filteredMembers = useMemo(() => {
    return filterMembers.filter(({ name }) => name.includes(searchValue));
  }, [searchValue, filterMembers]);

  const handleChange = (e) =>
    setFilterValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSearchChange = (e) => setSearchValue(e.target.value);

  const onSearchClear = () => setSearchValue('');

  useEffect(() => {
    const filledFilterParams = Object.entries(filterValues).filter(
      ([, v]) => v && v !== '-',
    );
    if (filledFilterParams.length > 0) {
      const filteredChargePoints = members.filter((item) => {
        const isValid = [];
        filledFilterParams.forEach(([k, v]) => {
          isValid.push(item[k] === v);
        });
        return !isValid.includes(false);
      });
      setFilterMembers(filteredChargePoints);
    } else {
      setFilterMembers(members);
    }
  }, [filterValues]);

  return {
    filteredMembers,
    filterValues,
    searchValue,
    handleChange,
    onSearchChange,
    onSearchClear,
  };
};
