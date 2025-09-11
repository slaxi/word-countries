import React, { useEffect, useState } from 'react';
import { TRegionProps, TResponse } from './types';
import { useFetchData } from '../../hooks/useFetchData';
import LoaderComponent from '../loader/Loader';
import Fallback from '../error/Fallback';
import Dropdown from '../dropdown/Dropdown';
import { Nullable, TCountryList } from '../../types';
import { ORDER } from '../../constants/constants';
import FilterBySubregion from '../filters-countries-list/list-countries-by-subregion/FilterBySubregion';
import ErrorBoundary from '../error/ErrorBoundary';
import { Container, Label, Section, Title } from './styled';
import { sortList } from '../../utils/sortList';
import RegularList from '../regular-list/RegularList';
import ListCountriesBySubregion from '../filters-countries-list/list-countries-by-subregion/ListCountriesBySubregion';

const RegionCountryList = ({ region }: TRegionProps) => {
  const { data, isLoading, error } = useFetchData('region', region) as TResponse;
  const [isSubregionDropdownOpen, setIsSubregionDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [initialRegionalList, setinitialRegionalList] = useState<TCountryList[] | []>(data);
  const [displayData, setDisplayData] = useState<TCountryList[] | []>([]);
  const [subregionName, setSubregionName] = useState<Nullable<string>>(null);
  const [orderValue, setOrderValue] = useState<Nullable<string>>(null);
  const [selectedSubregionName, setSelectedSubregionName] =
    useState<Nullable<{ label: string; value: string }>>(null);
  const [selectedOrder, setSelectedOrder] =
    useState<Nullable<{ label: string; value: string }>>(null);
  useEffect(() => {
    if (orderValue !== null) {
      setDisplayData(sortList(orderValue)(displayData) as TCountryList[]);
    }
  }, [orderValue]);

  if (isLoading) return <LoaderComponent />;
  if (error)
    return (
      <Fallback
        message={
          typeof error === 'string' ? error : 'Došlo je do greške prilikom dohvata podataka!'
        }
      />
    );
  const filteredDataBySubregion = [...new Set(data?.slice().map((region) => region.subregion))].map(
    (subregion) => ({ label: subregion, value: subregion })
  );
  const filterDataByOrder = [
    { label: ORDER.ACS, value: 'ASC' },
    { label: ORDER.DESC, value: 'DESC' }
  ];
  const handleFilterSelect = (option: { label: string; value: string }) => {
    setSubregionName(option.value);
    setOrderValue(null);
    setSelectedOrder(null);
  };
  const handleOrderSelect = (option: { label: string; value: string }) => {
    setOrderValue(option.value);
    setSubregionName(null);
  };

  return (
    <Section aria-labelledby="region-country-list-title" role="region">
      <Title id="region-country-list-title">Countries by region</Title>
      <Container role="form" aria-label="Filter zemlje po subregionu">
        <Label htmlFor="subregion-dropdown">Subregion</Label>
        <Dropdown
          id="subregion-dropdown"
          options={filteredDataBySubregion}
          placeholder="Select subregion"
          onSelect={handleFilterSelect}
          isOpen={isSubregionDropdownOpen}
          setIsOpen={setIsSubregionDropdownOpen}
          optionSelected={selectedSubregionName}
          setOptionSelected={setSelectedSubregionName}
          testId="region"
          aria-label="Dropdown za izbor subregiona"
        />
      </Container>
      <Container role="form" aria-label="Sortiranje zemalja" style={{ marginBottom: '1rem' }}>
        <Label htmlFor="order-dropdown">Sort</Label>
        <Dropdown
          id="order-dropdown"
          options={filterDataByOrder}
          placeholder="Order countries by"
          onSelect={handleOrderSelect}
          isOpen={isOrderDropdownOpen}
          setIsOpen={setIsOrderDropdownOpen}
          optionSelected={selectedOrder}
          setOptionSelected={setSelectedOrder}
          testId="subregion"
          aria-label="Dropdown za sortiranje zemalja"
        />
      </Container>
      <ErrorBoundary fallbackMessage="Doslo je do greske prilikom dohvata podataka">
        {subregionName && (
          <FilterBySubregion subregionName={subregionName} setState={setDisplayData} />
        )}
      </ErrorBoundary>
      <ErrorBoundary fallbackMessage="Doslo je do greske prilikom dohvata podataka">
        {orderValue && (
          <RegularList
            resourceName="subregionList"
            data={displayData}
            Component={
              ListCountriesBySubregion as React.ComponentType<{
                [key: string]: TCountryList;
              }>
            }
          />
        )}
      </ErrorBoundary>
      <ErrorBoundary fallbackMessage="Doslo je do greske prilikom dohvata podataka">
        {!subregionName && !orderValue && (
          <RegularList
            resourceName="subregionList"
            data={data}
            Component={
              ListCountriesBySubregion as React.ComponentType<{
                [key: string]: TCountryList;
              }>
            }
          />
        )}
      </ErrorBoundary>
    </Section>
  );
};

export default RegionCountryList;
