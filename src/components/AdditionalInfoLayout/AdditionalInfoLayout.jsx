import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from './AdditionalInfoLayout.styled';

export const AdditionalInfoLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

AdditionalInfoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
