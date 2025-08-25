import { TCountryList } from '../types';
import { vi } from 'vitest';
import { dataFetch } from '../utils/dataFetch';

describe('Data fetch function', () => {
  const mockResponse: TCountryList[] = [
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
  ];
  it.only('fetches data from API successfully', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockResponse),
        headers: {
          get: () => null
        },
        text: () => Promise.resolve(JSON.stringify(mockResponse))
        // Add other Response properties/methods as needed
      } as unknown as Response)
    );

    const data = await dataFetch('/region/europe');
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/region/europe');
    expect(Array.isArray(data)).toBe(true);
  });
  it('returns error object if response from API is not successful', async () => {
    const mockResponse = {
      message: 'Something went wrong! No data fetch!',
      status: 500
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.resolve(mockResponse),
        headers: {
          get: () => null
        },
        text: () => Promise.resolve(JSON.stringify(mockResponse))
        // Add other Response properties/methods as needed
      } as unknown as Response)
    );

    const data = await dataFetch('/region/europe');
    expect(data).toEqual({ status: 500, message: mockResponse.message });
  });
});
