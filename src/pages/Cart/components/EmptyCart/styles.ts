import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  padding: 6.4rem 0;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 6.4rem;

    & h3 {
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme['primary-dark']};
      text-align: center;
    }
  }
`;

export const Separator = styled.hr`
  margin-top: -3rem;
  width: 100%;
  max-width: 44.7rem;
  height: 0.13rem;
  background-color: ${({ theme }) => theme['primary-dark']};
`;
