import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 960px;

  margin: 0 auto;
  padding: 1.8rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  & div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    font-weight: 600;

    & h2 {
      display: none;

      font-size: 1.4rem;

      @media (min-width: 720px) {
        display: block;
      }
    }

    & span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme['low-light']};
    }
  }

  & img {
    width: 32px;
    height: 32px;
  }
`;
