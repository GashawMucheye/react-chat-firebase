import { Center, Flex, Text } from '@chakra-ui/react';
import SignByGoogle from '../components/SignByGoogle';

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

      <SignByGoogle />
    </Flex>
  );
};

export default Home;
