import React from 'react'
import { ChatState } from '../Context/chatProvider'
import { Avatar, AvatarGroup, Box, Button, Stack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import axios from "../utils/axios";
import { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import ChatLoading from './ChatLoading';
import { getSender, getSenderFull } from '../config/ChatLogics';
import GroupChatModal from './Miscellaneous/GroupChatModal';
import ScrollableFeed from 'react-scrollable-feed';

const MyChats = ({ fetchAgain, setFetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelectedChat, chats, setChats, toBeRefreshed, disableRefresh } = ChatState();


  const toast = useToast();


  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast(
        {
          title: "Error Occured",
          description: "Failed to load Chats",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left"
        })
    }
  }

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain])



  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems={'center'}
      p={3}
      bg={'white'}
      w={{ base: '100%', md: '40%' }}
      borderRadius='lg'
      borderWidth={'3px'}
      backgroundColor={'#0d1b2a'}
      borderColor='grey'

    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: '40px', md: '27px' }}
        display={'flex'}
        w='100%'
        justifyContent={'space-between'}
        alignItems='center'

      >

        <Text as='b' color={'white'} p='2'>
          Chats
        </Text>
        <GroupChatModal>
          <Button
            display={'flex'}
            fontSize={{ base: '17px', md: '12px', lg: '17px' }}
            rightIcon={<AddIcon />}
            colorScheme='teal'
            bg={'#38B2AC'}


          >

            New Group Chat

          </Button>
        </GroupChatModal>
      </Box>
      <Box
        d="flex"
        flexDir="column"
        p={3}
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
        backgroundColor={'#0d1b2a'}

      >
        <ScrollableFeed>

          {chats ? (
            <Stack overflowY={'scroll'}>
              {chats.map((chat) => {
                return (
                  < Box
                    onClick={() => setSelectedChat(chat)}
                    cursor="pointer"
                    bg={selectedChat === chat ? "#38B2AC" : "#33415c"}
                    color={selectedChat === chat ? "white" : "black"}
                    px={3}
                    py={2}
                    borderRadius="lg"
                    key={chat._id}
                  >



                    {!chat.isGroupChat ? (
                      <>
                        <Stack direction='row'>
                          <Avatar size='md' cursor='pointer' name={getSenderFull(user, chat.users).name} src={getSenderFull(user, chat.users).pic} />
                          <Stack direction='column'>
                            <Text fontSize={'xl'} as='b' color={'white'}>
                              {getSender(user, chat.users)}
                            </Text>
                            <Text fontWeight={'light'} fontFamily='Work sans' color={'#e8e8e8'}>
                              {chat.latestMessage ? chat.latestMessage.content : ""}
                            </Text>
                          </Stack>
                        </Stack>
                      </>
                    ) : (
                      <>
                        <Stack direction='row'>
                          <Avatar size='md' cursor='pointer' name={getSenderFull(user, chat.users).name} src={"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
                          <Stack direction='column' spacing={0.5}>

                            <Text fontSize={'xl'} fontWeight={'bold'} color='white'  >
                              {chat.chatName}
                            </Text>

                            {chat.latestMessage ? (
                              <>
                                <Text fontWeight={'light'} fontFamily='Work sans' color={'#e8e8e8'}>
                                  {chat.latestMessage.sender.name}: {chat.latestMessage.content}
                                </Text>
                              </>
                            ) : ""}

                          </Stack>

                        </Stack>
                      </>
                    )}



                  </Box>
                )
              })}

            </Stack>
          ) : (
            <ChatLoading />
          )}
        </ScrollableFeed >

      </Box>

    </Box >
  )
}

export default MyChats
