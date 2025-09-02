import React from 'react';
import { HomePageStyledList, ListItem } from '../home/styled';
import { REGION } from '../../constants/constants';
import HomeCart from '../cart/HomeCart';
import { TContinentsListProps, TRegionValue } from './types';

const ContinentsList = ({ handleCartClick }: TContinentsListProps) => {
  return (
    <HomePageStyledList aria-label="Lista regiona">
      {Object.values(REGION).map((continent: TRegionValue) => (
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
  );
};

export default ContinentsList;
