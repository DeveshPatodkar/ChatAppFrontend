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
import { CloseIcon, ExternalLinkIcon, LockIcon } from '@chakra-ui/icons';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import Draggable, { DraggableCore } from "react-draggable";
import DragHandleIcon from '@mui/icons-material/DragHandle';

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
            {displayVideo && <Draggable bounds={{ top: 0, bottom: 300 }}>
                <div className="handle" style={{ height: "50%", width: "40%", display: "flex", flexDirection: "column", position: 'absolute', zIndex: 1000 }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Box width='90%' bg='grey' display={'flex'} flexDir={'row'} justifyContent={'center'} alignItems={'center'} color={'white'} as='b'>
                            <DragHandleIcon fontSize='large' />
                        </Box>
                        <Button onClick={onCloseHandler} style={{ width: "10%" }} colorScheme='red' borderRadius={'0'}><CloseIcon /></Button>

                    </div>
                    <iframe height={"100%"} width="100%" src={videoLink} allow="accelerometer; microphone; camera; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe>

                </div>

            </Draggable>}
            <ScrollableFeed >
                {messages && messages.map((m, i) => (
                    <div style={{ display: "flex" }} key={m._id} >

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
                                backgroundColor: `${m.sender._id === user._id ? "#8cb4f3" : "#91ff91"
                                    }`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                                fontFamily: 'Work sans',
                                fontWeight: 'bold',
                                borderRadius: `${m.sender._id === user._id ? '10px 10px 0px 10px' : '10px 10px 10px 0px'
                                    }`
                            }}
                        >
                            {m.content}
                        </span>}
                        {m.link && <span
                            style={{
                                backgroundColor: `${m.sender._id === user._id ? "#8cb4f3" : "#91ff91"
                                    }`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: `${m.sender._id === user._id ? '10px 10px 0px 10px' : '10px 10px 10px 0px'
                                    }`,
                                fontFamily: 'Work sans',
                                fontWeight: 'bold',
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >{`${m.sender.name} has invited you for a video chat`}<br></br> <Button onClick={() => { handleJoinClick(m.link) }} color={'black'} as={'b'} borderWidth={'1px'} borderColor={'black'}> Join</Button>
                        </span>}
                    </div>
                ))}
            </ScrollableFeed>
        </>
    )
}

export default ScrollableChat