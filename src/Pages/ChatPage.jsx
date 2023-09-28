import React, { useEffect, useState } from 'react';
import axios from '../utils/axios'
import { ChatState } from '../Context/chatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../Components/Miscellaneous/SideDrawer';
import MyChats from '../Components/MyChats';
import ChatBox from '../Components/ChatBox';
import ChatbotButton from '../Components/ChatBotButton';

const ChatPage = () => {

    const { user } = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);


    return (
        <div style={{ width: '100%' }}>
            {user && <SideDrawer fetcher={setFetchAgain} fetchy={fetchAgain} />}

            <Box
                display='flex'
                justifyContent='space-between'
                w='100%'
                h='91.5vh'
                p='10px'
            >
                {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
                {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}

            </Box>
            <ChatbotButton />
        </div>
    )
};

export default ChatPage;
