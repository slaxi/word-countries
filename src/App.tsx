import { useState } from 'react';

import { Title } from './styled';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <>
      <Title tabIndex={0} aria-label="Welcome to app World Countries">
        World Countries
      </Title>
      <HomePage />
    </>
  );
}

export default App;
