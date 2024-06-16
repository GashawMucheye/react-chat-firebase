import { Box, Button, useToast } from '@chakra-ui/react';
import { auth } from '../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignByGoogle = () => {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box marginTop={'9em'}>
      <Button background="blue" onClick={signIn}>
        <i className="fa-brands fa-google"></i> Sign By Google
      </Button>
    </Box>
  );
};

export default SignByGoogle;
