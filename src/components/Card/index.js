import PropTypes from 'prop-types';

import { CardContainer } from './style';
import heart from '../../assets/images/heart.svg';
import skull from '../../assets/images/skull.svg';
import unknown from '../../assets/images/unknown.svg';

export default function Card({
  image, name, status, species, location,
}) {
  return (
    <CardContainer>
      <img className="character-img" src={image} alt="" />
      <div className="details">
        <h4>{name}</h4>
        <div className="status">

          <img src={status === 'Alive' ? heart : (status === 'Dead') ? skull : unknown} alt="" />
          <span>{status}</span>
        </div>
        <p>
          <strong>Specie: </strong>
          {species}
        </p>
        <p>
          <strong>Location: </strong>
          <br />
          {location}
        </p>
      </div>
    </CardContainer>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
