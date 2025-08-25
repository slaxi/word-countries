import React, { useState } from 'react';
import { REGION } from '../../constants/constants';
import HomeCart from '../cart/HomeCart';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';

const HomePage = () => {
  const [dataQuery, setDataQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useFetchData('region', dataQuery);
  const handleCartClick = (
    e: React.MouseEvent<HTMLDivElement>,
    continent: (typeof REGION)[keyof typeof REGION]
  ) => {
    setDataQuery(`/region/${continent}`);
  };

  if (isLoading) return <LoaderComponent />;
  if (error) return <div>Error...</div>;
  console.log({ data });

  return (
    <>
      {Object.values(REGION).map((continent: (typeof REGION)[keyof typeof REGION]) => (
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
