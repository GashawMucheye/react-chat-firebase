import { Center, Flex } from '@chakra-ui/react';
import SignScreen from './SignScreen';

const Home = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Center
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Gashaw's Chat
      </Center>
      <SignScreen />
    </Flex>
  );
};

export default Home;
