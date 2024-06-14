import { Box } from '@chakra-ui/react';
import SignByGoogle from '../components/SignByGoogle';

const Home = () => {
  return (
    <Box display="grid" placeItems="center">
      <SignByGoogle />
    </Box>
  );
};

export default Home;
