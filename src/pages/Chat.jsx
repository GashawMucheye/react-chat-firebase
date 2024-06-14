import { Box, Button, Center, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import SignOutUser from '../components/SignOutUser';
import { auth, db } from '../firebase/firebaseConfig';
import {
  addDoc,
  collection,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const messagesRef = collection(db, 'messages');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const data = {
      message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    };
    if (message === '') return;
    await addDoc(messagesRef, data);
    console.log('message sent');
    setMessage('');
  };
  return (
    <Container height={'100vh'}>
      <Box
        background="darkblue"
        display={'flex'}
        justifyContent={'space-between'}
      >
        <h1>Chat App</h1>
        <Button>
          <SignOutUser />
        </Button>
      </Box>
      <Box textAlign={'center'}>Welcome To Chat</Box>
      <Box background="yellowgreen">content</Box>
      <Box background="darkblue" marginTop={'6em'}>
        <form
          style={{
            background: 'purple',
            padding: '1em',
            textAlign: 'center',
          }}
          onSubmit={handleSendMessage}
        >
          <input
            value={message}
            type="text"
            placeholder="Send Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <select onChange={(e) => setRoom(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="ReactNative">ReactNative</option>
          </select>
          <Button type="submit" m={'6px'}>
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Chat;
