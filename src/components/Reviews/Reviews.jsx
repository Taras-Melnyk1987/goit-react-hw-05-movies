import React from 'react';
import PropTypes from 'prop-types';
import { List, ListHeader, Review, ReviewText } from './Reviews.styled';

export const Reviews = ({ reviews }) => {
  const { total_results, results } = reviews;
  return (
    <List>
      {total_results > 0 ? (
        results.map(({ author, content, id }) => (
          <Review key={id}>
            <ListHeader>
              <div>User: {author}</div>
            </ListHeader>
            <ReviewText>{content}</ReviewText>
          </Review>
        ))
      ) : (
        <p>No reviews!</p>
      )}
    </List>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.shape({
    total_results: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
  }),
};
