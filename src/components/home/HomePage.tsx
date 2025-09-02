import React, { useState } from 'react';
import { REGION } from '../../constants/constants';
import HomeCart from '../cart/HomeCart';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import ErrorBoundary from '../error/ErrorBoundary';
import Fallback from '../error/Fallback';
import { HomePageStyledList, ListItem } from './styled';
import RegionCountryList from '../region-country-list/RegionCountryList';
import ContinentsList from '../continents-list/ContinentsList';
import { TRegionValue } from '../continents-list/types';

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [showContinentsList, setShowContinentsList] = useState<boolean>(true);
  const handleCartClick = (e: React.MouseEvent<HTMLDivElement>, continent: TRegionValue) => {
    setSelectedRegion(`/region/${continent}`);
    setShowContinentsList((prev) => !prev);
  };

  return (
    <main>
      {showContinentsList && <ContinentsList handleCartClick={handleCartClick} />}
      {selectedRegion && (
        <>
          <RegionCountryList region={selectedRegion} />
          <button
            onClick={() => {
              setShowContinentsList((prev) => !prev);
              setSelectedRegion(null);
            }}>
            Back to home page
          </button>
        </>
      )}
    </main>
  );
};

export default HomePage;
