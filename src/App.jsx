import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protect from './components/Protect';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { auth } from './firebase/firebaseConfig';
import { Box } from '@chakra-ui/react';
import SignScreen from './pages/SignScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" h="100vh" bg={'red'}>
        <Navbar isLoggedIn={isLoggedIn} />
        <Box flex={1} bg={'yellowgreen'}>
          <Routes>
            <Route
              path="/chat"
              element={
                <Protect isLoggedIn={isLoggedIn}>
                  <Chat />
                </Protect>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Sign" element={<SignScreen />} />
          </Routes>
        </Box>
        <Box bg="blue" textAlign={'center'}>
          &copy; All rights reserved
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
