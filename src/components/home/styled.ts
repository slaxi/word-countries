import styled from 'styled-components';

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
