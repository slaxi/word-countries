import { TCountryList } from '../../../types';
import {
  CountryCapital,
  CountryCard,
  CountryDetail,
  CountryFlag,
  CountryFlagWrapper,
  CountryLanguages,
  CountryName,
  CountryPopulation
} from './styled';

const ListCountriesBySubregion = ({ subregionList }: { subregionList: TCountryList }) => {
  const { name, flags, subregion, capital, population, languages } = subregionList;
  return (
    <CountryCard>
      <CountryFlagWrapper>
        <CountryFlag src={flags.svg} alt={`${name.common} flag`} />
      </CountryFlagWrapper>
      <CountryName>{name.common}</CountryName>
      <CountryDetail>
        <strong>Subregion:</strong> {subregion}
      </CountryDetail>
      <CountryCapital>
        <strong>Capital:</strong> {capital}
      </CountryCapital>
      <CountryPopulation>
        <strong>Population:</strong> {population.toLocaleString()}
      </CountryPopulation>
      <CountryLanguages>
        <strong>Languages:</strong>{' '}
        {[languages].map((language, index) => (
          <span key={index}>
            {Object.values(language).map((lang, index, arr) => (
              <span key={lang}>
                {lang}
                {index < arr.length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        ))}
      </CountryLanguages>
    </CountryCard>
  );
};

export default ListCountriesBySubregion;
