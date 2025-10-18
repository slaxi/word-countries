import { ComponentPropsWithRef } from 'react';
import { REGION } from '../../constants/constants';

export type THomeCart = ComponentPropsWithRef<'div'> & {
  continent: (typeof REGION)[keyof typeof REGION];
};

export type TRegionKeys = {
  [value: string]: REGION;
};
