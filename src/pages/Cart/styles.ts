import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  background-color: ${({ theme }) => theme['high-pure']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  padding: 6.4rem;

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme['primary-dark']};
  }

  & img {
    width: 44.7rem;
    height: 26.5rem;
  }
`;
