import React, { useState } from 'react';
import { REGION } from '../../constants/constants';
import HomeCart from '../cart/HomeCart';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';

type RegionValue = (typeof REGION)[keyof typeof REGION];

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const { data, isLoading, error } = useFetchData('region', selectedRegion);
  const handleCartClick = (
    e: React.MouseEvent<HTMLDivElement>,
    continent: RegionValue
  ) => {
    setSelectedRegion(`/region/${continent}`);
  };

  if (isLoading) return <LoaderComponent />;
  if (error) return <div>Error...</div>;
  console.log({ data });

  return (
    <>
      {Object.values(REGION).map((continent: RegionValue) => (
        <HomeCart
          key={continent}
          continent={continent}
          onClick={(e) => handleCartClick(e, continent)}
        />
      ))}
    </>
  );
};

export default HomePage;
