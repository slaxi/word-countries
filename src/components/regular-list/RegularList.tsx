import React from 'react';
import { Container } from './styled';

type TRegularListProps<T> = {
  data: T[];
  resourceName: string;
  Component: React.ComponentType<{
    [key: string]: T;
  }>;
};

const RegularList = <T,>({ data, resourceName, Component }: TRegularListProps<T>) => {
  return (
    <Container>
      {data.map((listItem: T, index: number) => (
        <Component
          {...{
            [resourceName]: listItem
          }}
          key={
            typeof (listItem as any).id !== 'undefined'
              ? (listItem as any).id
              : `${index}${resourceName}`
          }
        />
      ))}
    </Container>
  );
};

export default RegularList;
