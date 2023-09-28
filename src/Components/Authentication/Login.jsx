import React, { useState } from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Button, useToast } from '@chakra-ui/react'
import axios from "../../utils/axios";
import { useHistory } from "react-router-dom";
import { ChatState } from '../../Context/chatProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const history = useHistory();
    const handleClick = () => setShow(!show);


    const submitHandler = async () => {
        setLoading(true);
        console.log({ email, password })
        if (!email || !password) {
            toast({
                title: "Please Fill all the Fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },

            };
            const { data } = await axios.post(
                "api/user/login",
                { email, password },
                config
            );
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });


            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);

            history.push("/chats");
            window.location.reload();
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
        }
    }
    return (
        <VStack spacing='5px' color='black'>

            <FormControl id='email' isRequired>
                <FormLabel color={'white'}> Email </FormLabel>
                <Input
                    color={'white'}

                    value={email}
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)} />
            </FormControl>



            <FormControl id='password' isRequired>
                <FormLabel color={'white'}> Password </FormLabel>
                <InputGroup>
                    <Input
                        color={'white'}
                        value={password}
                        type={show ? 'text' : 'password'}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>


            <Button
                colorScheme='green'
                width='100%'
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                Login
            </Button>
            <Button
                variant="solid"
                colorScheme="red"
                width="100%"
                onClick={() => {
                    setEmail("guestuser@example.com");
                    setPassword("123456");
                }}
            >
                Get Guest User Credentials
            </Button>
        </VStack >
    )
}

export default Login
