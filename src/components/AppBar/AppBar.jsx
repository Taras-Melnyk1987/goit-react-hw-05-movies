import React from 'react';
import PropTypes from 'prop-types';
import { AppBarStyles } from './AppBar.styled';

const AppBar = ({ children }) => {
  return <AppBarStyles>{children}</AppBarStyles>;
};

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AppBar };
