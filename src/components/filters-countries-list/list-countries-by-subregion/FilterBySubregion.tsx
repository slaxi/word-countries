import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { TResponse } from '../../region-country-list/types';
import LoaderComponent from '../../loader/Loader';
import Fallback from '../../error/Fallback';
import RegularList from '../../regular-list/RegularList';
import ListCountriesBySubregion from './ListCountriesBySubregion';
import { TCountryList } from '../../../types';
import { TFilterBySubregionProps } from '../types';

const FilterBySubregion = ({ subregionName, setState }: TFilterBySubregionProps) => {
  const { data, isLoading, error } = useFetchData(
    'subRegion',
    `/subregion/${subregionName}`
  ) as TResponse;
  if (isLoading) return <LoaderComponent />;
  if (error)
    return (
      <Fallback
        message={
          typeof error === 'string' ? error : 'Došlo je do greške prilikom dohvata podataka!'
        }
      />
    );

  if (data.length) setState(data);
  return (
    <RegularList
      resourceName="subregionList"
      data={data}
      Component={
        ListCountriesBySubregion as React.ComponentType<{
          [key: string]: TCountryList;
        }>
      }
    />
  );
};

export default FilterBySubregion;
