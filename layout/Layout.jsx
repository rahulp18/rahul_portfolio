import React from 'react';
import { Container } from './LayoutStyles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
