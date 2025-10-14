import { render } from '@testing-library/react';
import HomePage from '../components/home/HomePage';
import { axe } from 'jest-axe';
import { expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const mockQueryClient = new QueryClient();

describe('Home Page accessibility test', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(
      <QueryClientProvider client={mockQueryClient}>
        <HomePage />
      </QueryClientProvider>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
