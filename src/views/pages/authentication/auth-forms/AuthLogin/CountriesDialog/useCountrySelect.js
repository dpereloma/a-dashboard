import { useState } from 'react';
import { countries } from '../CodeForm/countries';

/**
 * Country select
 */
export function useCountrySelect(defaultValue) {
    /**
     * Fetch countries list
     *
     * Note: For now API return ivalid data, thats why we cannot use fetching countries.
     *       You can use configs/countries.ts with list of available countries.
     */
    // const query = useCountries();
    /**
     * Current selected country index.
     */
    const [currentCountry, setCurrentCountry] = useState(defaultValue.code);
    /**
     * Selected country index.
     */
    const [selectedCountry, setSelectedCountry] = useState(defaultValue.code);
    /**
     * Dirty flag used to indicate that the country is only checked but not selected
     */
    const [dirty, setDirty] = useState(false);

    /**
     * Select (check) country by ID and set dirty=true
     *
     * @param code - Country code
     */
    const select = (code) => {
        setDirty(true);
        setCurrentCountry(code);
    };

    /**
     * Set current selected (checked) country ID as selected
     */
    const set = () => {
        setDirty(false);
        setSelectedCountry(currentCountry);
    };

    const selected = countries.countries[selectedCountry];
    const current = countries.countries[currentCountry];

    return { countries: countries.countries, select, set, isDirty: dirty, selected, current };
}
