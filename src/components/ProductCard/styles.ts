import styled from 'styled-components';

export const Card = styled.div`
  height: 30.5rem;

  width: 100%;
  max-width: 34.3rem;

  @media (min-width: 960px) {
    max-width: 30.9rem;
  }

  padding: 1rem 1.1rem;

  background-color: ${({ theme }) => theme['high-pure']};

  border-radius: 4px;

  display: flex;
  align-items: center;
  flex-direction: column;

  & img {
    width: 14.7rem;
    height: 18.8rem;
  }

  text-align: center;
  font-weight: 700;

  & h3 {
    margin: 0.7rem 0 0.2rem;

    font-size: 1.2rem;
    color: ${({ theme }) => theme['low-pure']};
  }

  & span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme['primary-dark']};

    margin-bottom: 0.8rem;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  & img {
    width: 1.3rem;
    height: 1.3rem;
  }

  & h6 {
    font-weight: 400;
    color: ${({ theme }) => theme['high-pure']};
    font-size: 1.2rem;
  }
`;
