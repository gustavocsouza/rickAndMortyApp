import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.blue.dark};
  width: 150px;
  height: 320px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 8px 16px;
  transition: transform 0.2s ease-in;
  text-align: center;

  h4 {
    transition: transform 0.2s ease-in;
  }

  .character-img {
    width: 100%;
    transition: transform 0.2s ease-in;
    border-radius: 16px;
  }

  &:hover{
    transform: scale(1.05);
    cursor: pointer;

    .character-img {
      transform: scale(1.07)
    }
  }

  .details {
    color: ${({ theme }) => theme.colors.gray[100]};
    margin: 4px 8px;

    .status{
      display:flex;
      font-size: 12px;
      display: flex;
      justify-content: center;

      span {
        text-transform: capitalize;
      }

      img {
        width: 15px;
        margin-right: 4px;
      }
    }

    p {
      font-size: 14px;
    }
  }
`;
