import { BASE_COUNTRIES_API } from '../constants/constants';
import { TCountryList } from '../types';

export type TErrorResponse = {
  status: number;
  message: string;
};

export const dataFetch = async (query: string | null): Promise<TCountryList[] | TErrorResponse> => {
  try {
    const response = await fetch(`${BASE_COUNTRIES_API}${query ?? ''}`);
    if (!response || !response.ok)
      return { status: response.status, message: 'Something went wrong! No data fetch!' };
    const data = await response.json();
    return data as TCountryList[];
  } catch (error) {
    console.error(error);
    throw {
      status: (error as unknown as TErrorResponse).status,
      message: (error as unknown as TErrorResponse).message
    };
  }
};
