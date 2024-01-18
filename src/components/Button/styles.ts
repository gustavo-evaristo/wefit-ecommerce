import styled from 'styled-components';

export const Container = styled.button`
  padding: 1.1rem 4.67rem;

  min-width: 18rem;

  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme['primary-pure']};

  font-weight: 700;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.3rem;
`;
