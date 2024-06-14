import {
  Box,
  Button,
  Center,
  Container,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where('room', '==', room),
      orderBy('createdAt')
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const data = {
      message,
      date: new Date().toLocaleTimeString(),
      uid: auth.currentUser.uid,
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
    <Container
      height={'100vh'}
      w="100%"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
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
      <Center bg="tomato" h="100px" color="white">
        Welcome To Chat
      </Center>
      <Box background="yellowgreen">
        {messages.map((newMessage, i) => {
          return (
            <Text key={i}>
              {newMessage.user} : {newMessage.message}:{newMessage.date}
            </Text>
          );
        })}
      </Box>
      <Box background="darkblue" marginTop={'6em'}>
        <form
          style={{
            background: 'purple',
            padding: '1em',
            textAlign: 'center',
          }}
          onSubmit={handleSendMessage}
        >
          <Input
            value={message}
            type="text"
            placeholder="Send Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Select
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Select option"
          >
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="ReactNative">ReactNative</option>
          </Select>
          <Button type="submit" m={'6px'} colorScheme="blue">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Chat;
