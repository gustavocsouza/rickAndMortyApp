import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CharacterContainer, EpisodesListaContainer } from './style';
import heart from '../../assets/images/heart.svg';
import CharacterService from '../../services/CharacterService';

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    async function loadContact() {
      const getCharacter = await CharacterService.getById(id);
      setEpisodes(getCharacter.episode);
      setCharacter(getCharacter);
    }

    loadContact();
  }, []);

  return (
    <>
      <CharacterContainer>
        <img src={character?.image} alt="" />
        <div className="details">
          <h3>{character?.name}</h3>
          <div className="status">
            <img src={heart} alt="" />
            <span>{character?.status}</span>
          </div>
          <p>
            <strong>Species: </strong>
            {character?.species}
          </p>
          <p>
            <strong>Gender: </strong>
            {character?.gender}
          </p>
          <p>
            <strong>Location: </strong>
            {character?.location.name}
          </p>
          <p>
            <strong>Origin: </strong>
            {character?.origin.name}
          </p>
        </div>
      </CharacterContainer>
      <EpisodesListaContainer>
        <ul>
          {episodes.map((episode) => (
            <li><a href={episode}>{episode}</a></li>
          ))}
        </ul>
      </EpisodesListaContainer>

    </>
  );
}
