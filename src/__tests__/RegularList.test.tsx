import { render, screen } from '@testing-library/react';
import RegularList from '../components/regular-list/RegularList';
import { axe } from 'jest-axe';

type TComponentProps = {
  name: string;
  flag: string;
  subregion: string;
  capital: string;
  population: string;
  language: string;
};

const subregionList = [
  {
    name: 'Serbia',
    flag: 'flag.png',
    subregion: 'East Europe',
    capital: 'Belgrade',
    population: '8.000.000',
    language: 'serbian'
  }
];

const Component = ({ subregionList }: { subregionList: TComponentProps }) => {
  const { name, flag, subregion, capital, population, language } = subregionList;
  return (
    <>
      <h2>{name}</h2>
      <p>{capital}</p>
      <p>{flag}</p>
      <p>{subregion}</p>
      <p>{population}</p>
      <p>{language}</p>
    </>
  );
};

describe('Regular list generic component', () => {
  render(
    <RegularList
      data={subregionList}
      resourceName="subregionList"
      Component={Component as React.ComponentType<{ [key: string]: TComponentProps }>}
    />
  );
  it('should display proper heading name', () => {
    const heading = screen.getByText('Serbia');

    expect(heading).toBeInTheDocument();
  });
  it('should display all the rest of the props', () => {
    render(
      <RegularList
        data={subregionList}
        resourceName="subregionList"
        Component={Component as React.ComponentType<{ [key: string]: TComponentProps }>}
      />
    );
    const items = { ...subregionList };
    const propsItems: TComponentProps = items[0];
    for (const key in propsItems) {
      const value = `${propsItems[key as keyof TComponentProps]}`;
      if (value === 'Serbia') continue;
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  });
  it('should throw an error if resourceName is invalid', () => {
    expect(() => {
      render(
        <RegularList
          data={subregionList}
          resourceName="invalidResourceName"
          Component={Component as React.ComponentType<{ [key: string]: TComponentProps }>}
        />
      );
    }).toThrow();
  });
  it('should render nothing if data is empty', () => {
    render(
      <RegularList
        data={[]}
        resourceName="subregionList"
        Component={Component as React.ComponentType<{ [key: string]: TComponentProps }>}
      />
    );

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('should not have any accessibillity violations', async () => {
    const { container } = render(
      <RegularList
        data={subregionList}
        resourceName="subregionList"
        Component={Component as React.ComponentType<{ [key: string]: TComponentProps }>}
      />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
