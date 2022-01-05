import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CharacterService from '../../services/CharacterService';
import Card from '../../components/Card';
import { Input } from '../../components/Input';
import {
  HomeContainer, ListCardsContainer, InputContainer, PaginationContainer,
} from './style';
import Loader from '../../components/Loader';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);

  const loadCharacters = useCallback(async () => {
    try {
      const listCharacters = await CharacterService.getAll(page, searchTerm);
      setInfo(listCharacters.info);
      setCharacters(listCharacters.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm, page]);

  useEffect(() => {
    loadCharacters();
  }, [searchTerm, page]);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <HomeContainer>
      <Loader isLoading={isLoading} />
      <InputContainer>
        <Input type="text" placeholder="Pesquise pelo nome..." onChange={handleSearchChange} />
      </InputContainer>
      <ListCardsContainer>
        {characters?.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <Card
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              location={character.location.name}
            />
          </Link>
        ))}
      </ListCardsContainer>
      <PaginationContainer page={page}>

        {page !== 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>Anterior</button>
        )}
        {page !== info?.pages && (
        <button type="button" onClick={() => setPage(page + 1)}>Próxima</button>
        )}
      </PaginationContainer>
    </HomeContainer>
  );
}
