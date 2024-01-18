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
  height: 88vh;

  background-color: ${({ theme }) => theme['high-pure']};

  border-radius: 4px;
  padding: 1.6rem 1.6rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      flex: 1;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
`;
