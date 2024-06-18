import { Button, useToast } from '@chakra-ui/react';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
const SignOutUser = () => {
  const toast = useToast();
  const handleSignOut = async () => {
    try {
      signOut(auth);
      console.log('User signed out!');
      toast({
        title: 'Account sign out',
        description: 'you signed out successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error.message);
      toast({
        title: 'Account sign out',
        description: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <div>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
};

export default SignOutUser;
