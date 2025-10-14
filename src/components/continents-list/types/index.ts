import { REGION } from '../../../constants/constants';

export type TRegionValue = (typeof REGION)[keyof typeof REGION];

export type TContinentsListProps = {
  handleCartClick: (e: any, continent: TRegionValue) => void;
};
