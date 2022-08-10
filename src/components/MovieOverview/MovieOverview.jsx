import React from 'react';
import PropTypes from 'prop-types';
import createImageUrl from '../../helpers/createImageUrl';
import defaultImage from '../../images/no-image.png';
import {
  MovieOverviewWrapper,
  Thumb,
  MovieInfo,
  GenresList,
  GenresListItem,
} from './MovieOverview.styled';

export const MovieOverview = ({ info }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    info;
  const baseImgUrl = createImageUrl();
  const releaseYear = release_date.slice(0, 4);
  const userScore = vote_average * 10;

  return (
    <MovieOverviewWrapper>
      <div>
        <Thumb>
          <img
            src={`${
              poster_path ? `${baseImgUrl}${poster_path}` : defaultImage
            }`}
            alt={`Poster ${title}`}
          />
        </Thumb>
      </div>
      <MovieInfo>
        <h2>
          {title}
          <span>{` (${releaseYear})`}</span>
        </h2>
        <p>
          User score: <span>{userScore}%</span>
        </p>
        {overview && (
          <>
            <h3>Overview</h3>
            <p>{overview}</p>
          </>
        )}

        {genres && genres.length > 0 && (
          <>
            <h4>Genres</h4>
            <GenresList>
              {genres.map(genre => (
                <GenresListItem key={genre.id}>{genre.name}</GenresListItem>
              ))}
            </GenresList>
          </>
        )}
      </MovieInfo>
    </MovieOverviewWrapper>
  );
};

MovieOverview.propTypes = {
  info: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
