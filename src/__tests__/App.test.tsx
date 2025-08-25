import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const mockQueryClient = new QueryClient();

describe('App componenent', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={mockQueryClient}>
        <App />
      </QueryClientProvider>
    );
  });
  it('should display correct title', () => {
    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
  it('should display correct title', () => {
    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('World Countries');
  });

  it('should display the list of continents', () => {
    const headings = screen.getAllByRole('heading', { level: 2 });

    expect(headings).toHaveLength(5);
  });

  it('should create snapshot for the correct title', () => {
    const { container } = render(
      <QueryClientProvider client={mockQueryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
