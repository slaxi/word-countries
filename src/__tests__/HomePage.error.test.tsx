import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HomePage from '../components/home/HomePage';

vi.mock('../hooks/useFetchData', () => ({
  useFetchData: () => ({
    data: null,
    isLoading: false,
    error: 'No data found!'
  })
}));

describe('Fallback message', () => {
  it.only('should display fallback message if there is a error in data fetch', () => {
    render(<HomePage />);

    expect(screen.getByText('No data found!')).toBeInTheDocument();
  });
});
