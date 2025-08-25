import { fireEvent, render, screen } from '@testing-library/react';
import HomeCart from '../components/cart/HomeCart';
import { REGION } from '../constants/constants';
import { vi } from 'vitest';
import { useFetchData } from '../hooks/useFetchData';

describe('HomeCart component', () => {
  beforeEach(() => {
    const continent = REGION.EUROPE;
    render(<HomeCart continent={continent} />);
  });
  it('should display the title of the continent', () => {
    const continentName = screen.getByRole('heading', { level: 2 });

    expect(continentName).toBeInTheDocument();
  });

  it('should display the correct name of the continent', () => {
    const continentName = screen.getByRole('heading', { level: 2 });

    expect(continentName).toHaveTextContent('europe');
  });
  it('should have proper background colour based on the continent', () => {
    const continent = REGION.AFRICA;
    render(<HomeCart continent={continent} />);

    expect(screen.getByText('africa')).toHaveStyle('background-color: rgb(0,0,0,0)');
  });
});


