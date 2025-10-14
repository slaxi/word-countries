import React from 'react';
import { CountryCard, HomeCartTitle } from './styled';
import { THomeCart } from './types';

const HomeCart = ({ continent, ...props }: THomeCart) => {
  return (
    <CountryCard as="section" $continentBackround={continent} {...props}>
      <HomeCartTitle tabIndex={-1}>{continent}</HomeCartTitle>
    </CountryCard>
  );
};

export default HomeCart;
