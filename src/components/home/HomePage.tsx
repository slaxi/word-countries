import React, { useState } from 'react';
import { REGION } from '../../constants/constants';
import HomeCart from '../cart/HomeCart';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import ErrorBoundary from '../error/ErrorBoundary';
import Fallback from '../error/Fallback';
import { HomePageStyledList, ListItem } from './styled';

type RegionValue = (typeof REGION)[keyof typeof REGION];

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const { data, isLoading, error } = useFetchData('region', selectedRegion);
  const handleCartClick = (e: React.MouseEvent<HTMLDivElement>, continent: RegionValue) => {
    setSelectedRegion(`/region/${continent}`);
  };

  if (isLoading) return <LoaderComponent />;
  if (error)
    return (
      <Fallback
        message={
          typeof error === 'string' ? error : 'Došlo je do greške prilikom dohvata podataka!'
        }
      />
    );

  return (
    <main>
      <HomePageStyledList aria-label="Lista regiona">
        {Object.values(REGION).map((continent: RegionValue) => (
          <ListItem key={continent}>
            <HomeCart
              key={continent}
              continent={continent}
              onClick={(e) => handleCartClick(e, continent)}
              tabIndex={0}
              aria-label={`Izaberi region ${continent}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCartClick(e as any, continent);
                }
              }}
            />
          </ListItem>
        ))}
      </HomePageStyledList>
    </main>
  );
};

export default HomePage;
