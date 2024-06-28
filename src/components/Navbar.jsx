import { Box, List } from '@chakra-ui/react';
import React from 'react';
import SignOutUser from './SignOutUser';
import { Link } from 'react-router-dom';
import SignScreen from '../pages/SignScreen';

const Navbar = ({ isLoggedIn }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg="blue"
      alignItems="center"
      p={'12px'}
    >
      <h2>Gashaw's Chat</h2>
      <List display="flex" alignItems="center" gap="6px">
        <li>
          <Link to="/Chat">Chat</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        {isLoggedIn ? (
          <SignOutUser />
        ) : (
          <li>
            <Link to="/Sign">Sign</Link>
          </li>
        )}
      </List>
    </Box>
  );
};

export default Navbar;
