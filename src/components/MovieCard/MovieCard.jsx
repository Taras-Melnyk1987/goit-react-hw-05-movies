import React from 'react';
import PropTypes from 'prop-types';
import { Thumb, Title } from './MovieCard.styled';
import createImageUrl from '../../helpers/createImageUrl';
import defaultImage from '../../images/no-image.png';

export const MovieCard = ({ details }) => {
  const { title, poster_path } = details;
  const baseImgUrl = createImageUrl();

  return (
    <>
      <Thumb>
        <img
          src={`${poster_path ? `${baseImgUrl}${poster_path}` : defaultImage}`}
          alt={`Poster ${title}`}
        />
      </Thumb>
      <Title>
        <h2>{title}</h2>
      </Title>
    </>
  );
};

MovieCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};
