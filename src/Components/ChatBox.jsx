import React from 'react'
import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/chatProvider"
import SingleChat from './SingleChat';



const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState()

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="#0d1b2a"
      w={{ base: "100%", md: "59%" }}
      borderRadius="lg"
      borderWidth="3px"
      borderColor={'grey'}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};


export default ChatBox
