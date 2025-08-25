import React from 'react';
import styled from 'styled-components';

interface FallbackProps {
  message: string;
}

const FallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  background: #ffeaea;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 8px #ffb3b3;
`;

const FallbackMessage = styled.h2`
  color: #d32f2f;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const Fallback: React.FC<FallbackProps> = ({ message }) => (
  <FallbackWrapper>
    <FallbackMessage>{message}</FallbackMessage>
  </FallbackWrapper>
);

export default Fallback;
