import { Button, useToast } from '@chakra-ui/react';
import { auth } from '../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignByGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  const toast = useToast();
  const signIn = async () => {
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
    <div>
      <Button onClick={signIn}>Sign By Google</Button>
    </div>
  );
};

export default SignByGoogle;
