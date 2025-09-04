import React, { useState } from 'react';
import { TRegionProps, TResponse } from './types';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import Fallback from '../error/Fallback';
import Dropdown from '../dropdown/Dropdown';
import { TCountryList } from '../../types';



const RegionCountryList = ({ region }: TRegionProps) => {
  const { data, isLoading, error } = useFetchData('region', region) as TResponse;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [initialRegionalList, setinitialRegionalList] = useState(data);
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
  const handleSelect = (option: { label: string; value: string }) => console.log(option);
  return (
    <div style={{ position: 'relative' }}>
      <Dropdown
        options={filteredDataBySubregion}
        placeholder="Select subregion"
        onSelect={handleSelect}
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      />
      {isDropdownOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            background: 'transparent',
          }}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default RegionCountryList;

/**
 * filter by subregion
 * filter by ASC/DESC
 * Regular list
 */
