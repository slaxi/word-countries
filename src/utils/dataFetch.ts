import { BASE_COUNTRIES_API } from '../constants/constants';
import { TCountryList } from '../types';

export type TErrorResponse = {
  message: string;
};

export const dataFetch = async (query: string | null): Promise<TCountryList[] | TErrorResponse> => {
  throw Error('No data!');
  try {
    const response = await fetch(`${BASE_COUNTRIES_API}${query}`);
    if (!response || !response.ok) throw Error('Something went wrong! No data fetch!');
    const data = await response.json();
    return data as TCountryList[];
  } catch (error) {
    console.error(error);
    throw { message: (error as unknown as TErrorResponse).message };
  }
};
