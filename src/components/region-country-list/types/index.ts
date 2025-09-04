import { TCountryList } from "../../../types";

export type TRegionProps = {
  region: string | null;
};

export type TResponse = {
  data: TCountryList[] | [];
  isLoading: boolean;
  error: Error | null;
};