import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CharacterService from '../../services/CharacterService';
import heart from '../../assets/images/heart.svg';
import { CharacterModalContainer } from './style';

export default function CharacterModal({ isOpenModal, characterId, setIsOpenModal }) {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    async function loadContact() {
      const getCharacter = await CharacterService.getById(characterId);
      // setEpisodes(getCharacter.episode);
      setCharacter(getCharacter);
    }

    loadContact();
  }, []);
  const customStyles = {
    content: {
      backgroundColor: '#ececec',
      with: '90%',
      maxWidth: 500,
      padding: 10,
      borderRadius: 5,
    },
    overlay: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={setIsOpenModal}
      contentLabel="teste"
      overlayClassName="modal-overlay"
      className="modal-content"
      style={customStyles}
    >
      <CharacterModalContainer>
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
        <button type="button" onClick={() => setIsOpenModal(false)}>Close</button>
      </CharacterModalContainer>
    </ReactModal>
  );
}

CharacterModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  characterId: PropTypes.number.isRequired,
  setIsOpenModal: PropTypes.bool.isRequired,
};
