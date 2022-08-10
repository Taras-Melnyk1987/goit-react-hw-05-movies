import PropTypes from 'prop-types';
import React from 'react';
import { ContainerStyles } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
