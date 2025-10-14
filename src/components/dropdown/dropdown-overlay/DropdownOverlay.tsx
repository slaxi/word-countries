import React from 'react';
import { Overlay } from './styled';
import { TDropdownOverlay } from '../types';

const DropdownOverlay = ({ zIndex, background }: TDropdownOverlay) => {
  return <Overlay zIndex={zIndex} background={background} />;
};

export default DropdownOverlay;
