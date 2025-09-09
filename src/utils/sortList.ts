import { TCountryList } from '../types';

export const sortList = (order: string) => (list: TCountryList[]) => {
  if (order === 'ASC') {
    return list.slice().sort((a, b) => {
       return (a.name.common).localeCompare(b.name.common);
    });
  } else {
     return list.slice().sort((a, b) => {
       return (b.name.common).localeCompare(a.name.common);
    });
  }
};
