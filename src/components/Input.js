import styled from 'styled-components';

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gray[900]};
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  border: solid 2px ${({ theme }) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 2rem;
  outline: none;
  padding: 0 16px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  transition: border-color 0.2s ease-in;

  &:focus{
    border: solid 2px ${({ theme }) => theme.colors.purple.light};
  }

  @media (max-width: 768px) {
    height: 3rem;
    font-size: 16px;
  }
`;
