import React, { useState } from 'react';
import {
  DropdownArrow,
  DropdownButton,
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  PlaceholderText,
  SelectedText
} from './styled';
import { TDropdownList } from './types';
import { Overlay } from './dropdown-overlay/styled';

const Dropdown = <T extends { label: string; value: string }>({
  options,
  placeholder,
  isOpen,
  setIsOpen,
  onSelect,
  optionSelected,
  setOptionSelected,
  testId
}: TDropdownList<T>) => {
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: T) => {
    setOptionSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <DropdownContainer data-testid={testId}>
      <DropdownButton onClick={toggleDropdown}>
        {optionSelected ? (
          <SelectedText>{optionSelected.label}</SelectedText>
        ) : (
          <PlaceholderText>{placeholder || 'Select an option'}</PlaceholderText>
        )}
        <DropdownArrow $isOpen={isOpen}>▼</DropdownArrow>
      </DropdownButton>
      {isOpen && (
        <>
          <Overlay onClick={() => setIsOpen(false)} zIndex={1} background="transparent" />
          <DropdownList>
            {options.map((option) => (
              <DropdownListItem key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </DropdownListItem>
            ))}
          </DropdownList>
        </>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
