import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  img {
    width: 40%;
  }

  @media (max-width: 768px) {
    img {
      width: 70%;
    }
  }
`;
