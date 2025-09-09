import { findByTestId, fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import RegionCountryList from '../components/region-country-list/RegionCountryList';
import * as hooks from '../hooks/useFetchData';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { axe } from 'jest-axe';

const queryClient = new QueryClient();
vi.mock('../filters-countries-list/list-countries-by-subregion/FilterBySubregion', () => ({
  default: () => <div>Filtered List</div>
}));
describe('RegionCountryList', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should show loader when data is loading', async () => {
    vi.spyOn(hooks, 'useFetchData').mockReturnValue({
      data: [],
      isLoading: true,
      error: null
    });

    render(<RegionCountryList region="Europe" />);
    expect(await screen.findByTestId('loader')).toBeInTheDocument();
  });

  it('should show fallback message when there is an error', () => {
    vi.spyOn(hooks, 'useFetchData').mockReturnValue({
      data: [],
      isLoading: false,
      error: { name: 'dummy', message: ' Došlo je do greške prilikom dohvata podataka!' }
    });

    render(<RegionCountryList region="Europe" />);
    expect(screen.getByText(/Došlo je do greške prilikom dohvata podataka!/i)).toBeInTheDocument();
  });

  it('renders dropdowns and region title', () => {
    vi.spyOn(hooks, 'useFetchData').mockReturnValue({
      data: [
        {
          name: {
            common: 'Dummyland',
            official: 'The Republic of Dummyland',
            nativeName: {
              fra: {
                official: 'La République de Dummyland',
                common: 'Dummyland'
              }
            }
          },
          capital: ['Dummy City'],
          population: 123456,
          area: 654321,
          flag: '🏳️',
          flags: { png: 'dummy.png', svg: 'dummy.svg' },
          region: 'Dummy Region',
          subregion: 'Dummy Subregion',
          languages: {
            fra: 'Dummyish'
          },
          currencies: {
            XPF: {
              symbol: 'DUM',
              name: 'Dummy Dollar'
            }
          }
        }
      ],
      isLoading: false,
      error: null
    });
    render(
      <QueryClientProvider client={queryClient}>
        <RegionCountryList region="europe" />
      </QueryClientProvider>
    );
    expect(screen.getByText(/Countries by region/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subregion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sort/i)).toBeInTheDocument();
  });

  // it.only('shows filtered list when subregion is selected', async () => {
  //    vi.spyOn(hooks, 'useFetchData').mockReturnValue({
  //     data: [
  //       {
  //         name: {
  //           common: 'Dummyland',
  //           official: 'The Republic of Dummyland',
  //           nativeName: {
  //             fra: {
  //               official: 'La République de Dummyland',
  //               common: 'Dummyland'
  //             }
  //           }
  //         },
  //         capital: ['Dummy City'],
  //         population: 123456,
  //         area: 654321,
  //         flag: '🏳️',
  //         flags: { png: 'dummy.png', svg: 'dummy.svg' },
  //         region: 'Dummy Region',
  //         subregion: 'Dummy Subregion',
  //         languages: {
  //           fra: 'Dummyish'
  //         },
  //         currencies: {
  //           XPF: {
  //             symbol: 'DUM',
  //             name: 'Dummy Dollar'
  //           }
  //         }
  //       }
  //     ],
  //     isLoading: false,
  //     error: null
  //   });
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <RegionCountryList region="europe" />
  //     </QueryClientProvider>
  //   );

  //   fireEvent.click(screen.getByText(/Select subregion/i));

  //   const countryCart = await screen.findByTestId('country')
  //   expect(countryCart).toBeInTheDocument();
  // });

  it('should not have any accessibillity violations', async () => {
    const {container} = render(
      <QueryClientProvider client={queryClient}>
        <RegionCountryList region="europe" />
      </QueryClientProvider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations()
  })
});
