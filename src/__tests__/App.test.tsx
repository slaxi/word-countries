import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App componenent', () => {
  beforeEach(() => {
    render(<App />);
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
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
