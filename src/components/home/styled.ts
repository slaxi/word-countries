import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  justify-content: flex-start;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HomePageStyledList = styled.ul`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  padding: 2em;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li``;
