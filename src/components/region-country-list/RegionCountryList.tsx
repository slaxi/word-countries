import React from 'react';
import { TRegionProps } from './types';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import Fallback from '../error/Fallback';

const RegionCountryList = ({ region }: TRegionProps) => {
  const { data, isLoading, error } = useFetchData('region', region);
  if (isLoading) return <LoaderComponent />;
  if (error)
    return (
      <Fallback
        message={
          typeof error === 'string' ? error : 'Došlo je do greške prilikom dohvata podataka!'
        }
      />
    );
    console.log({data})
  return <div>RegionCountryList</div>;
};

export default RegionCountryList;
