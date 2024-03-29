import styled from 'styled-components';
import { Button } from '~/components/Button';

export const Container = styled.main`
  margin: 0 auto;
  width: 95%;

  @media (min-width: 960px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  width: 100%;

  @media (max-width: 960px) {
    height: 88vh;
  }

  background-color: ${({ theme }) => theme['high-pure']};

  border-radius: 4px;
  padding: 1.6rem 1.6rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductHeader = styled.div`
  @media (max-width: 960px) {
    display: none;
  }

  display: flex;
  align-items: center;

  & h6 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme['low-light']};
  }

  & h6:nth-child(2) {
    flex: 1;
    text-align: right;
  }

  & h6:nth-child(3) {
    flex: 1;
    text-align: center;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  flex: 1;

  overflow-y: auto;

  padding-bottom: 1.6rem;
`;

export const Summary = styled.div`
  border-top: 1px solid ${({ theme }) => theme['primary-dark']};

  padding: 2.1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & h5 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme['primary-dark']};
    }

    & h6 {
      font-size: 1.4rem;
      color: ${({ theme }) => theme['low-light']};
    }

    & h5,
    h6 {
      font-weight: 700;
      text-align: right;

      @media (max-width: 960px) {
        flex: 1;
      }
    }
  }

  @media (min-width: 960px) {
    flex-direction: row-reverse;

    & div {
      justify-content: flex-end;
      gap: 1.6rem;
    }

    & h5,
    h6 {
      text-align: right;
    }

    & button {
      max-width: 23.5rem;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
`;
