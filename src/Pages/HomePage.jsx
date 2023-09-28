import {
    Box,
    Center,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from '../Components/Authentication/Login'
import SignUp from '../Components/Authentication/SignUp'
import { useHistory } from 'react-router-dom'
const HomePage = () => {

    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) {
            history.push('/chats')
        }
    }, [history])

    return (

        <Container maxW='xl' centerContent  >
            <Box
                d="flex"
                textAlign='center'
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                backgroundColor={'#343a40'}
                borderColor='grey'
            >
                <Text fontSize="4xl" fontFamily="Work sans" as='b' color={'white'}>
                    Welcome to Convo-Fi!
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="white" backgroundColor={'#343a40'} borderColor='grey'
            >
                <Tabs variant='soft-rounded' >
                    <TabList mb='1em'>
                        <Tab width='50%' color={'white'}>Sign Up</Tab>
                        <Tab width='50%' color={'white'}> Login</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HomePage
