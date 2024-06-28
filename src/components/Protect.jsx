import React, { useContext, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const Protect = ({ isLoggedIn, children }) => {
  return (
    <Container marginBlock={'3em'} p={'1em'} maxW={'800px'}>
      {isLoggedIn ? children : <Navigate to="/" />}
    </Container>
  );
};

export default Protect;
