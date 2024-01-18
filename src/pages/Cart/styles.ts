import styled from 'styled-components';

export const Container = styled.main`
  width: 95%;
  margin: 0 auto;

  background-color: ${({ theme }) => theme['high-pure']};

  border-radius: 4px;

  @media (min-width: 960px) {
    width: 100%;
  }
`;
