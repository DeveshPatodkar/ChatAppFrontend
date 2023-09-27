import React, { useState } from 'react'
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
    isLastMessage,
    isSameSender,
    isSameSenderMargin,
    isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/chatProvider";
import { ExternalLinkIcon, LockIcon } from '@chakra-ui/icons';
import { Button, Link } from '@chakra-ui/react';
import Draggable, { DraggableCore } from "react-draggable";

const ScrollableChat = ({ messages }) => {
    const { user } = ChatState();
    const [displayVideo, setDisplayVideo] = useState(false)
    const [videoLink, setVideoLink] = useState("")

    const handleJoinClick = (link) => {
        setDisplayVideo(true)
        setVideoLink(link)
    }

    const onCloseHandler = () => {
        setDisplayVideo(false)
        setVideoLink("")
    }

    return (
        <>
            {displayVideo && <Draggable bounds={{  top: 0, bottom: 300 }}>
                <div className="handle" style={{ height: "50%", width: "40%", display: "flex", flexDirection: "column", position: 'absolute', zIndex:1000 }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                    <div  style={{width: "50%"}}>Drag from here</div>
                    <Button onClick={onCloseHandler} style={{width: "50%"}}>Cloce</Button>

                    </div>
            <iframe height={"100%"} width="100%" src={videoLink} allow="accelerometer; microphone; camera; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe>

            </div>

            </Draggable>}
            <ScrollableFeed >
                {messages && messages.map((m, i) => (
                    <div style={{ display: "flex" }} key={m._id}>

                        {
                            (isSameSender(messages, m, i, user._id)
                                || isLastMessage(messages, i, user._id))
                            && (<Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                                <Avatar
                                    mt="7px"
                                    mr={1}
                                    size="sm"
                                    cursor="pointer"
                                    name={m.sender.name}
                                    src={m.sender.pic}
                                />
                            </Tooltip>)
                        }
                        {m.content && <span
                            style={{
                                backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                                    }`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >
                            {m.content}
                        </span>}
                        {m.link && <span
                            style={{
                                backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                                    }`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >{`${m.sender.name} has invited you for a video chat`}<br></br> <Button onClick={() => { handleJoinClick(m.link) }} color="teal.500" > join</Button>
                        </span>}
                    </div>
                ))}
            </ScrollableFeed>
        </>
    )
}

export default ScrollableChat