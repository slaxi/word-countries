import { useState } from 'react';

import { Title } from './styled';
import HomePage from './components/home/HomePage';
import { AppWrapper } from './styled';

function App() {
  return (
    <>
      <Title>World Countries</Title>
      <AppWrapper>
        <HomePage />
      </AppWrapper>
    </>
  );
}

export default App;
