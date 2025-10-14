import React, { useState } from 'react';
import { Container } from './styled';
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
              }}
            >
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
