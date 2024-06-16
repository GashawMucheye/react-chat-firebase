import { Box, Select } from '@chakra-ui/react';
import React from 'react';

const RoomScreen = () => {
  return (
    <Box>
      <Select
        onChange={(e) => setRoom(e.target.value)}
        placeholder="Select option"
      >
        <option value="JavaScript">JavaScript</option>
        <option value="TypeScript">TypeScript</option>
        <option value="React">React</option>
        <option value="ReactNative">ReactNative</option>
      </Select>
    </Box>
  );
};

export default RoomScreen;
