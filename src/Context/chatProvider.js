import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [selectedChat, setSelectedChat] = useState()
    const [chats, setChats] = useState([]);
    const [notification, setNotification] = useState([]);
    const [toBeRefreshed, setToBeRefreshed] = useState(false);

    const history = useHistory();

    const disableRefresh = () => {
        setToBeRefreshed(() => false);
    }

    const enableRefresh = () => {
        setToBeRefreshed(() => true);
    }

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);

        if (!userInfo) {
            history.push('/')
        }
    }, [history])

    return <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats, notification, setNotification, toBeRefreshed, enableRefresh, disableRefresh }}>{children}</ChatContext.Provider>
}
export const ChatState = () => {

    return useContext(ChatContext);
}


export default ChatProvider;