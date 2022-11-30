import styled from 'styled-components';

export const CharacterModalContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  .character-img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 64px;
    margin-top: -6rem;
  }
  .name-status-sontainer{
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .character-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    text-align: center;
  }
  button {
    background: ${({ theme }) => theme.colors.blue.dark};
    color: white;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 1rem;
  }
`;

export const EpisodesListaContainer = styled.div`
  display: flex;
  justify-content: center;
`;
