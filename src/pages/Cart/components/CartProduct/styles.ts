import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  & img {
    width: 6.4rem;
    height: 8.2rem;
  }
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 960px) {
    flex-direction: column;
    align-items: flex-start;

    & img {
      display: none;
    }

    & h3 {
      margin-bottom: 0.3rem;
    }
  }

  & h3 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme['primary-dark']};
    font-weight: 700;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    & h4 {
      font-size: 1.6rem;
      font-weight: 700;
      color: ${({ theme }) => theme['primary-dark']};
    }

    & img {
      width: 1.6rem;
      height: 1.8rem;
      cursor: pointer;
    }
  }
`;

export const Details = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 960px) {
    flex: 1;

    gap: 9rem;

    & h6 {
      display: none;
    }

    & div:first-child {
      flex: 1;
      justify-content: flex-end;
    }

    & div:last-child {
      align-items: center;
      justify-content: space-between;
      width: 25rem;

      & img:last-child {
        display: flex;
      }
    }
  }

  & div {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    & div {
      height: 2.6rem;
      width: 100%;
      max-width: 6rem;

      padding: 0 1.2rem;

      border: 1px solid ${({ theme }) => theme['high-medium']};
      border-radius: 4px;

      background-color: ${({ theme }) => theme['high-pure']};

      & span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme['primary-dark']};
      }
    }

    & img {
      width: 1.8rem;
      height: 1.8rem;
      cursor: pointer;
    }
  }

  & div:last-child {
    @media (max-width: 960px) {
      display: block;
    }

    & h5 {
      font-size: 1.6rem;
      color: ${({ theme }) => theme['primary-dark']};
    }

    & h6 {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${({ theme }) => theme['low-light']};
    }

    & h5,
    h6 {
      font-weight: 700;
      text-align: right;
    }

    & img {
      display: none;
    }
  }
`;
