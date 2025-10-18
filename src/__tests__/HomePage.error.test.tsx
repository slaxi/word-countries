import { fireEvent, render, screen } from '@testing-library/react';
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
  it('should display fallback message if there is a error in data fetch', async () => {
    render(<HomePage />);
     const cardEurope = screen.getByText('europe')
     fireEvent.click(cardEurope)
     const notificationMsg = await screen.findByText("No data found!")
    expect(notificationMsg).toBeInTheDocument()
  });
});
