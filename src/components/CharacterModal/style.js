import styled from 'styled-components';

export const CharacterModalContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  gap: 2rem;

  .character-info {
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
  }

  .character-img {
    border-radius: 3rem 0 0 3rem;
  }

  .status {
    display: flex;
    align-items: center;
  }

  .character-details {
    display: flex;
    flex-direction: column;
  }

  button {
    background: ${({ theme }) => theme.colors.blue.dark};
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 1rem;
    position: absolute;
    right: 5%;
    top: 5%;
    border: none;
    transition: ease-in 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.blue.main};
      box-shadow: rgba(0, 0, 0, 0.40) 0px 3px 8px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 18rem;

    .character-info {
      padding-right: 0;
      padding-bottom: 2rem;
    }

    .name-status-container {
      text-align: center;
    }

    .status{
      justify-content: center;
    }

    .character-img {
      border-radius: 3rem 3rem 0 0;
      width: 18rem;
    }

    .character-details {
      justify-content: center;
    }

    p {
      text-align: center;
    }
  }
`;

export const EpisodesListaContainer = styled.div`
  display: flex;
  justify-content: center;
`;
