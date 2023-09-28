# Talk-a-Tive

Talk-a-Tive is a real time chatting app, with video calling and AI chatbot features

## Submitted By

Name of Applicant: DEVESH PATODKAR

University: IIT Bhubaneswar

Department: Electronics and Communication Engineering

University Roll Number: 21EC01031

## Deployment

The project is deployed at [https://chat-app-frontend-neon.vercel.app/](https://chat-app-frontend-neon.vercel.app/). Feel free to check it out and use it.

## System Design

![System Design](https://drive.google.com/uc?id=17FJgaDGE0Q-Ot4ygwJlY77foVQYce9lk)

## Installation

Use the package manager npm(https://www.npmjs.com) to install the app.

Clone the GitHub repository.

```bash
git clone https://github.com/DeveshPatodkar/ChatAppFrontend.git
```

In the project directory, move to Backend Directory and Install Dependencies and start the backend server

```bash
npm install
npm start
```

## Backend

The backend for the app is deployed at [https://chat-app-mern-phi.vercel.app/](https://chat-app-mern-phi.vercel.app/) and the code for the same is available at [https://github.com/DeveshPatodkar/ChatAppMERN.git](https://github.com/DeveshPatodkar/ChatAppMERN.git). It is based on Node JS and REST API principles.

## Authentication

### Sign Up

A new user can sign up for a new account to begin chatting. The screen for the same is as follows:

![Sign Up Screen](https://drive.google.com/uc?id=1QGjKySKWsrsrJErSgg1IuAwsHR5DaRL4)

### Log in

Existing users can log in as follows:

![Log In Screen](https://drive.google.com/uc?id=1WR1QPhl8EHDbdAXCSVT4fMbBySEtna4Y)

Apart from exisiting users, users wishing to test this app as guest can also do so by clicking on **Get Guest User Credentials**.

## Chatting

### Adding Users

Search for new users using their Email ID and add them to start chatting.

![Add User](https://drive.google.com/uc?id=1uGclYEvDXvOVaoJRTsRE2AxF3uvcwFbu)

The search bar can be used to search as follows. Clicking on the user allows you to add them and start chatting.

![Add User](https://drive.google.com/uc?id=1NQX-9Rpa2jzA24OaltjdOFahcxSMdXvz)

### Chat Interface

![Chat Interface](https://drive.google.com/uc?id=10w2ReWI4KeU3L4gSFlkULPWJEcrgBT8N)

Enter your message in the message input box and press Enter to send the message.

### Group Chats

To create group chats, click on **New Group Chat** on the main screen. Then, you will have to add users and name the group as follows:

![Group Chats](https://drive.google.com/uc?id=1CzIbFT3jcgSvSbF6_5opX86gdQ-6_DcS)

Voila! Your new group is ready for chatting.

## AI Chat Bot
You can access the AI chat bot by either clicking on the **AI Bot** user in your chats or by clicking the icon button on bottom left corner.

![AI Chat](https://drive.google.com/uc?id=1NL-tBaQyOkmEKaRyZm4dFA52VO1hLKBI)

Click this icon on bottom left to open AI Bot (after adding it using add new user).

![AI Icon](https://drive.google.com/uc?id=1vT1XuMw4G3sr-j9HLs7T-1DFWwyD5neH)

### CAUTION

**As the AI Chat Bot uses a paid API from Open AI, therefore its use is restricted. Please do not overuse it or you may exceed the quota and the bot may stop functioning.**

## Video Calling

To initiate a video call, navigate to the contact and click on the **New Video Call** icon:

![VC Icon](https://drive.google.com/uc?id=1z03qL24_9iEntzi_ogf1j06-jQnlAhYw)

This will send a video call link to the contact. Click on join and join the video call using that link.

![VC](https://drive.google.com/uc?id=1iNV_XuuYeMeifJBex_5NNki4lLWa77uL)

### CAUTION

**Video Call is done by using an API from Digital Samba. This limits the number of concurrent sessions to 1 and total number of minutes to 1000. Please do not overuse it for now.**

## Notifications

The app needs notification access to send notifications for new messages.

## Dependencies

### FrontEnd

1. **React**: This framework is used to create the entire Frontend UI and also add functionality to all of it.
2. **Chakra-UI**: This package is used to create beautiful looking UI elements, icons and boxes.
3. **MDI**: This package is used to get icons for the App.
4. **Axios**: This package is used to make API requests.
5. **Framer Motion**: This package is used to add animations to the app.
6. **MUI**: This package is used for enhancing the UI.
7. **React Router**: This package is used for routing using react.
8. **Socket-IO**: This packet is used to use Web Sockets for real time communications.

### BackEnd

1. **Node**: This is a Javascript Runtime used to run Javascript Programs outside the browser. Used to create the main backend framework.
2. **Async**: This is used to ease the process of handling asynchronous tasks
3. **Axios**: This is used for making API requests
4. **BCrypt**: This is used for encrypting the message traffic.
5. **MongoDB**: Database used for storing users and messages
6. **Mongoose**: MongoDB helper package for optimising requests to MongoDB
7. **Dotenv**: Used for integrating environment variables
8. **Express**: ExpressJS is used for ease of making RESTful APIs.
9. **Socket-IO**: This packet is used to use Web Sockets for real time communications.
10. **Open AI**: Used for getting GPT-3 for AI Chatbot
11. **Digital Samba**: Used for Video Call API.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
