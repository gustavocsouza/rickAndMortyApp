import { useState, useEffect, useCallback } from 'react';
import CharacterService from '../../services/CharacterService';
import Card from '../../components/Card';
import { Input } from '../../components/Input';
import {
  HomeContainer, ListCardsContainer, InputContainer, PaginationContainer, NoResultsContainer,
} from './style';
import Loader from '../../components/Loader';
import CharacterModal from '../../components/CharacterModal';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [characterId, setCharacterId] = useState(10);

  const openModal = (id) => {
    setIsOpenModal(true);
    setCharacterId(id);
  };

  const loadCharacters = useCallback(async () => {
    try {
      setIsLoading(true);
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
    const timeOut = setTimeout(() => {
      setSearchTerm(event.target.value);
      setPage(1);
    }, 500);
    return () => clearTimeout(timeOut);
  }

  return (
    <HomeContainer>
      <InputContainer>
        <Input type="text" placeholder="Search for the multiverse" onChange={handleSearchChange} />
      </InputContainer>
      <Loader isLoading={isLoading} />
      {!isLoading
      && (
        <>
          <ListCardsContainer>
            {
            !characters
              && (
                <NoResultsContainer>
                  <p>No results</p>
                </NoResultsContainer>
              )
            }
            {characters?.map((character) => (
              <button
                type="button"
                key={character.id}
                onClick={() => openModal(character.id)}
              >
                <Card
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  location={character.location.name}
                />
              </button>
            ))}
          </ListCardsContainer>
          <CharacterModal
            isOpenModal={isOpenModal}
            characterId={characterId}
            setIsOpenModal={setIsOpenModal}
          />

          <PaginationContainer page={page}>
            {page !== 1 && characters && (
            <button type="button" onClick={() => setPage(page - 1)}>Previous</button>
            )}
            {page !== info?.pages && characters && (
            <button type="button" onClick={() => setPage(page + 1)}>Next</button>
            )}
          </PaginationContainer>
        </>
      )}
    </HomeContainer>
  );
}
