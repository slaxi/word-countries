import styled from 'styled-components';
import { REGION } from '../../constans/constants';
import { R } from 'vitest/dist/chunks/environment.d.cL3nLXbE';
import { TRegionKeys } from './types';

const setBackgroundColor = <T extends REGION>(
  continent: (typeof REGION)[keyof typeof REGION]
): T | string => {
  switch (continent) {
    case REGION.EUROPE:
      return 'rgba(0, 79, 245, 0.8)';
    case REGION.AFRICA:
      return 'rgb(0,0,0)';
    case REGION.ASIA:
      return 'rgba(245, 222, 0, 0.8)';
    case REGION.AMERICA:
      return 'rgba(245, 0, 17, 0.8)';
    case REGION.OCEANIA:
      return 'rgba(7, 245, 0, 0.8)';
    default:
      return '#fff';
  }
};

export const CountryCard = styled.div<{
  $continentBackround: (typeof REGION)[keyof typeof REGION];
}>`
  min-width: 220px;
  background: ${({ $continentBackround }) => setBackgroundColor($continentBackround)};
  border-radius: 8px;
  box-shadow: 0 2px 8px ${({ $continentBackround }) => setBackgroundColor($continentBackround)};
  padding: 1.5rem;
  margin: 1rem 0;
  transition: box-shadow 0.2s;
  justify-items: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px ${({ $continentBackround }) => setBackgroundColor($continentBackround)};
  }

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 1rem;
    font-size: 0.95rem;
  }
`;

export const CountryFlag = styled.div`
  width: 100%;
  max-width: 240px;
  border-radius: 6px;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
`;

export const CountryName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

// .card-details {
//     font-size: 1rem;
//     color: #555;
//     text-align: center;
// }

export const CountryCapital = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;
  text-align: center;
`;

export const CountryPopulation = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.25rem;
  text-align: center;
`;

export const CountryLanguages = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.25rem;
  text-align: center;
`;

export const CountryFlagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const HomeCartTitle = styled.h2`
  font-size: 3.25rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;
