import { fireEvent, render, screen } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from '../components/home/HomePage';
import { vi } from 'vitest';
import React from 'react';

const queryClient = new QueryClient();
const continentsList = ['europe', 'africa', 'america', 'oceania', 'asia'];
describe('Home Page component', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );
  });

  it('should display the continents list', () => {
    const continentCarts = screen.getAllByRole('heading', { level: 2 });

    expect(continentCarts).toHaveLength(continentsList.length);
  });

  it('should display the correct continent name', () => {
    continentsList.forEach((continent) => {
      const continentCart = screen.getByText(continent);

      expect(continentCart).toBeInTheDocument();
    });
  });

  it('should hide the list of the continents if one continent cart is selected', () => {
    const continentCart = screen.getByText('europe');

    fireEvent.click(continentCart);

    expect(continentCart).not.toBeInTheDocument();
  });

  it('should show the dropdown list if one continent cart is selected', async () => {
    const continentCart = screen.getByText('europe');

    fireEvent.click(continentCart);

    const dropdownList = await screen.findByTestId('region');

    expect(dropdownList).toBeInTheDocument();
  });

  it('should show the back navigation button if one continent cart is selected', async () => {
    const continentCart = screen.getByText('europe');

    fireEvent.click(continentCart);

    const returnBtn = await screen.findByText('Back to home page');

    expect(returnBtn).toBeInTheDocument();
  });

  it('should show the continent list again if navigation button is clicked', async () => {
    const continentCartList = screen.getAllByRole('heading', { level: 2 });

    fireEvent.click(continentCartList[0]);

    const returnBtn = await screen.findByText('Back to home page');

    fireEvent.click(returnBtn);
    const continentsList = await screen.findAllByRole('heading', { level: 2 });

    expect(continentsList).toHaveLength(5);
  });
});
