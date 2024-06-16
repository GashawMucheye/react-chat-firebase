import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Chat from '../pages/Chat';
import { Container } from '@chakra-ui/react';

const Protect = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <Container marginBlock={'3em'} p={'1em'} maxW={'800px'}>
      {loggedIn ? <Chat /> : children}
    </Container>
  );
};

export default Protect;
