import React, { useState } from 'react';
import { TRegionProps, TResponse } from './types';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import Fallback from '../error/Fallback';
import Dropdown from '../dropdown/Dropdown';
import { Nullable, TCountryList } from '../../types';
import { ORDER } from '../../constants/constants';
import FilterBySubregion from '../filters-countries-list/list-countries-by-subregion/FilterBySubregion';
import ErrorBoundary from '../error/ErrorBoundary';

const RegionCountryList = ({ region }: TRegionProps) => {
  const { data, isLoading, error } = useFetchData('region', region) as TResponse;
  const [isSubregionDropdownOpen, setIsSubregionDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [initialRegionalList, setinitialRegionalList] = useState<TCountryList[] | []>(data);
  const [displayData, setDisplayData] = useState<TCountryList[] | []>([]);
  const [subregionName, setSubregionName] = useState<Nullable<string>>(null);
  const [orderValue, setOrderValue] = useState<Nullable<string>>(null);
  if (isLoading) return <LoaderComponent />;
  if (error)
    return (
      <Fallback
        message={
          typeof error === 'string' ? error : 'Došlo je do greške prilikom dohvata podataka!'
        }
      />
    );
  const filteredDataBySubregion = [...new Set(data?.slice().map((region) => region.subregion))].map(
    (subregion) => ({ label: subregion, value: subregion })
  );
  const filterDataByOrder = [
    { label: ORDER.ACS, value: ORDER.ACS },
    { label: ORDER.DESC, value: ORDER.DESC }
  ];
  const handleFilterSelect = (option: { label: string; value: string }) =>
    setSubregionName(option.value);
  const handleOrderSelect = (option: { label: string; value: string }) =>
    setOrderValue(option.value);
  return (
    <>
      <Dropdown
        options={filteredDataBySubregion}
        placeholder="Select subregion"
        onSelect={handleFilterSelect}
        isOpen={isSubregionDropdownOpen}
        setIsOpen={setIsSubregionDropdownOpen}
      />
      <Dropdown
        options={filterDataByOrder}
        placeholder="Order countries by"
        onSelect={handleOrderSelect}
        isOpen={isOrderDropdownOpen}
        setIsOpen={setIsOrderDropdownOpen}
      />
      <ErrorBoundary fallbackMessage="Doslo je do greske prilikom dohvata podataka">
        {subregionName && (
          <FilterBySubregion subregionName={subregionName} setState={setDisplayData} />
        )}
      </ErrorBoundary>
    </>
  );
};

export default RegionCountryList;

/**
 * filter by subregion
 * filter by ASC/DESC
 * Regular list
 */
