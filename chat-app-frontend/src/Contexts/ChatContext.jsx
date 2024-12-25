import {createContext, useContext, useState} from "react";


// const ChatContext=createContext();

// export const ChatProvider=({children})=>{

//     const [roomId,setRoomId]=useState("");
//     const [currUser,setCurrUser]=useState("");
//     const [connected,setConnected]=useState(false);

//     return (
//     <ChatContext.Provider value={{roomId,setRoomId,currUser,setCurrUser,connected,setConnected}}
//     >
//     {children}</ChatContext.Provider>);

// }
// export const useChatContext = ()=> {return useContext(ChatContext)};
const ChatContext=createContext();
export const ChatProvider = ({ children }) => { // Changed Children to children
    const [roomId, setRoomId] = useState("");
    const [currUser, setCurrUser] = useState("");
    const [connected, setConnected] = useState(false);

    return (
        <ChatContext.Provider 
        value={{ roomId, setRoomId, currUser, setCurrUser, connected, setConnected }}>
            {children} {/* Ensure children is rendered */}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    return useContext(ChatContext);
};

// export default useChatContext;
// import { createContext, useContext, useState } from "react";

// // Create the chat context
// const ChatContext = createContext();

// // Provide the chat context
// export const ChatProvider = ({ children }) => {
//   const [roomId, setRoomId] = useState();
//   const [currUser, setCurrUser] = useState();
//   const [connected, setConnected] = useState(false);

//   return (
//     <ChatContext.Provider value={{ roomId, setRoomId, currUser, setCurrUser, connected, setConnected }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// // Custom hook to use the chat context
// const useChatContext = () => {
//   return useContext(ChatContext);
// };

// export default useChatContext;
