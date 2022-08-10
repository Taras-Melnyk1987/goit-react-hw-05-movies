import React from 'react';
import PropTypes from 'prop-types';
import { GalleryStyles } from './MosiesGallery.styled';

export const MoviesGallery = ({ children }) => {
  return <GalleryStyles>{children}</GalleryStyles>;
};

MoviesGallery.propTypes = {
  children: PropTypes.node.isRequired,
};
