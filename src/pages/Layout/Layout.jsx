import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../components';

const Layout = () => {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export { Layout };
