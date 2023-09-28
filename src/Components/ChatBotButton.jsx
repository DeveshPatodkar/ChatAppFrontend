import { useState } from "react";
import styles from "./ChatbotButton.module.css";
import { mdiRobotExcitedOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { ChatState } from "../Context/chatProvider";
import { Tooltip } from "@chakra-ui/react";
import axios from "../utils/axios";

const ChatbotButton = () => {

    const { setSelectedChat, chats, user, setChats } = ChatState()


    const accessChat = async (userId) => {

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            };
            console.log(typeof (userId))
            const { data } = await axios.post(`/api/chat`, { userId }, config);
            if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
            setSelectedChat(data);
        } catch (error) {

        };
    }
    const clickHandler = async () => {

        const aiChat = chats.filter(chat => chat.users[0].email === "ai@devesh.com" || chat.users[1].email === "ai@devesh.com")
        console.log(aiChat);
        if (aiChat.length == 0) {
            accessChat('65146ff5554977ca9f68e14f')
        }
        setSelectedChat(aiChat[0]);

    }
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (

        <div>
            <Tooltip label='AI BOT'>
                <button
                    className={styles.chatButton}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onClick={clickHandler}
                >
                    <Icon path={mdiRobotExcitedOutline} size={1.5} />
                </button>
            </Tooltip>
        </div>


    );
};

export default ChatbotButton;