import { Box, Center, Text } from '@chakra-ui/react';
import SignByGoogle from '../components/SignByGoogle';

const Home = () => {
  return (
    <>
      <Center>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Gashaw's Chat
        </Text>
      </Center>

      <Box display="grid" placeItems="center">
        <SignByGoogle />
      </Box>
    </>
  );
};

export default Home;
