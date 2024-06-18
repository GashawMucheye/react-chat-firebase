import {
  Box,
  Button,
  Center,
  Container,
  Input,
  // Select,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import SignOutUser from '../components/SignOutUser';
import { auth, db } from '../firebase/firebaseConfig';
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, 'messages');
  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy('createdAt'));
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
      photUrl: auth.currentUser.photoURL,
      date: new Date().toLocaleTimeString(),
      uid: auth.currentUser.uid,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
    };
    if (message === '') return;
    await addDoc(messagesRef, data);
    console.log('message sent');
    setMessage('');
  };
  return (
    <Container
      // minHeight={'600px'}
      maxW="100%"
      p="1em"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      <Box
        p="12px"
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <h1>Chat App</h1>
        <Button>
          <SignOutUser />
        </Button>
      </Box>
      <Center color="white">
        <span style={{ margin: '4px' }}>
          <Image
            src={auth.currentUser.photoURL}
            alt="profile_img"
            width={50}
            borderRadius={'50px'}
          />
        </span>
        <span> Welcome {auth.currentUser.displayName}</span>
      </Center>
      <Box>
        {messages.map((newMessage, i) => {
          return (
            <Box key={i} mt={7}>
              <section
                style={
                  auth.currentUser.uid === newMessage.uid
                    ? {
                        marginRight: '60%',
                        background: 'greenyellow',
                        Width: '20%',
                        minHeight: '10%',
                        padding: '10px',
                        borderRadius: '10px 0 10px 0',
                      }
                    : {
                        marginLeft: '60%',
                        background: 'gray',
                        padding: '10px',
                        Width: '20%',
                        minHeight: '10%',
                        borderRadius: '10px 0 10px 0',
                      }
                }
              >
                <Text>{newMessage.date}</Text>
                <Text>
                  {newMessage.user} : {newMessage.message}
                </Text>
              </section>
            </Box>
          );
        })}
      </Box>
      <Box>
        <form onSubmit={handleSendMessage} display="flex">
          <Flex alignItems={'center'}>
            <Input
              value={message}
              type="text"
              placeholder="Send Message"
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button type="submit" m={'6px'} colorScheme="blue">
              Send
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  );
}

export default Chat;
