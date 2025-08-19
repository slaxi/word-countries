import React from 'react';
import { CountryCard, HomeCartTitle } from './styled';
import { THomeCart } from './types';

const HomeCart = ({ continent }: THomeCart) => {
  return (
    <CountryCard $continentBackround={continent}>
      <HomeCartTitle>{continent}</HomeCartTitle>
    </CountryCard>
  );
};

export default HomeCart;
