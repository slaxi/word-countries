export type TDropdownList<T> = {
  options: T[];
  placeholder: string;
  onSelect: (option: T) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TDropdownOverlay = {
  zIndex: number;
  background: string;
};
