import { useState } from "react";
import styles from "./ChatbotButton.module.css";
import { mdiRobotExcitedOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { ChatState } from "../Context/chatProvider";
import { Tooltip } from "@chakra-ui/react";

const ChatbotButton = () => {

    const { setSelectedChat, chats } = ChatState()
    const clickHandler = () => {
        const aiChat = chats.filter(chat => chat.users[0].email === "ai@devesh.com" || chat.users[1].email === "ai@devesh.com")
        setSelectedChat(aiChat[0])
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