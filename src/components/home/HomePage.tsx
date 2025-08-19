import React, { useState } from 'react';
import { REGION } from '../../constans/constants';
import HomeCart from '../cart/HomeCart';
import { useFetchData } from '../../hooks/useFetchData';

const HomePage = () => {
  const [dataQuery, setDataQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useFetchData('region', dataQuery);
  const handleCartClick = (
    e: React.MouseEvent<HTMLDivElement>,
    continent: (typeof REGION)[keyof typeof REGION]
  ) => {
    setDataQuery(`/region/${continent}`);
  };

  if (isLoading) return <div>Loading...</div>;
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
