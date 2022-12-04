import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  width: 95%;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ListCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
  }
`;

export const PaginationContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: ${({ page }) => (page !== 1 ? 'space-between' : 'end')};
  margin-bottom: 32px;
  margin: auto;
  button {
    background: ${({ theme }) => theme.colors.purple.dark};
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 8px 24px;
    border-radius: 8px;
  }
`;

export const NoResultsContainer = styled.div`
  width: 100%;
  margin: auto;
  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 2rem;
    font-style: italic;
    color: #666666;
    font-weight: 300;
  }
`;
