import React from 'react';
import { CountryCard, HomeCartTitle } from './styled';
import { THomeCart } from './types';

const HomeCart = ({ continent, ...props }: THomeCart) => {
  return (
    <CountryCard $continentBackround={continent} {...props}>
      <HomeCartTitle>{continent}</HomeCartTitle>
    </CountryCard>
  );
};

export default HomeCart;
