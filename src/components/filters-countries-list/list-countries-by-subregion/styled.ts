import styled from 'styled-components';

export const CountryCard = styled.div`
  max-width: 350px;
  min-height: 490px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const CountryFlagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CountryFlag = styled.img`
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

export const CountryDetail = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
`;

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
