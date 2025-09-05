import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import RegionCountryList from '../components/region-country-list/RegionCountryList';

vi.mock('../hooks/useFetchData', () => ({
  useFetchData: () => ({
    data: null,
    isLoading: false,
    error: 'No data found!'
  })
}));

describe('Fallback message', () => {
  it('should display fallback message if there is a error in data fetch', () => {
    render(<RegionCountryList region={''} />);

    expect(screen.getByText('No data found!')).toBeInTheDocument();
  });
});
