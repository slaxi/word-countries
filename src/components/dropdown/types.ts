import { Nullable } from '../../types';

export type TDropdownList<T> = {
  id: string;
  options: T[];
  placeholder: string;
  onSelect: (option: T) => void;
  optionSelected: Nullable<{ label: string; value: string }>;
  setOptionSelected: React.Dispatch<
    React.SetStateAction<
      Nullable<{
        label: string;
        value: string;
      }>
    >
  >;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  testId: string;
};

export type TDropdownOverlay = {
  zIndex: number;
  background: string;
};
