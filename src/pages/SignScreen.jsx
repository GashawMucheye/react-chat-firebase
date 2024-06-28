import { Box, Button, Center, useToast } from '@chakra-ui/react';
import { auth } from '../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignScreen = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const toast = useToast();
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      toast({
        title: 'Account created.',
        description: 'you signed in successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      navigate('/chat', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      marginTop={'10em'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Button bg="blue" mt={'2em'} onClick={signIn}>
        <i className="fa-brands fa-google"></i> Sign By Google
      </Button>
    </Box>
  );
};

export default SignScreen;
