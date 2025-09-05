import React, { useState } from 'react';
import { REGION } from '../../constants/constants';
import HomeCart from '../cart/HomeCart';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import ErrorBoundary from '../error/ErrorBoundary';
import Fallback from '../error/Fallback';
import { Container, HomePageStyledList, ListItem } from './styled';
import RegionCountryList from '../region-country-list/RegionCountryList';
import ContinentsList from '../continents-list/ContinentsList';
import { TRegionValue } from '../continents-list/types';

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const handleCartClick = (e: React.MouseEvent<HTMLDivElement>, continent: TRegionValue) => {
    setSelectedRegion(`/region/${continent}`);
  };

  return (
    <main>
      <Container>
        {!selectedRegion ? (
          <ContinentsList handleCartClick={handleCartClick} />
        ) : (
          <>
            <button
              onClick={() => {
                setSelectedRegion(null);
              }}>
              Back to home page
            </button>
            <RegionCountryList region={selectedRegion} />
          </>
        )}
      </Container>
    </main>
  );
};

export default HomePage;
