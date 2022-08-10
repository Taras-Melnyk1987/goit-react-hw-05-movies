import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer } from './Card.styled';

export const Card = ({ children }) => <CardContainer>{children}</CardContainer>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
