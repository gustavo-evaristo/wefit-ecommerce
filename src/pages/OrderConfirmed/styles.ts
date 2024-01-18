import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;

  @media (min-width: 960px) {
    width: 100%;
  }

  background-color: ${({ theme }) => theme['high-pure']};

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  padding: 6.4rem 0;

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme['primary-dark']};
    text-align: center;

    @media (max-width: 720px) {
      max-width: 20rem;
    }
  }
`;
