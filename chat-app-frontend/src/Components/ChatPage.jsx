import { MdAttachFile, MdSend } from "react-icons/md";
import {React, useEffect, useRef, useState } from "react";
import  {useChatContext} from '../Contexts/ChatContext.jsx';
import {useNavigate}  from "react-router";
import SockJS from "sockjs-client";
import {baseURL} from '../Routers/AxiosHelper';
import { Stomp } from "@stomp/stompjs";
import toast from "react-hot-toast";
import { timeAgo } from "../Routers/Helper.js";
function ChatPage(){


    const { roomId,currUser,connected,setConnected,setRoomId}=useChatContext();
    // console.log(roomId);
    // console.log(currUser);
    // console.log(connected);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!connected){
            navigate("/");
        }
    },[roomId,currUser,connected]);

    const [input,setInput]=useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient,setStompClient]=useState(null);
    const [messages,setMessages]=useState([

        // {   sender: "Leonor",
        //     content: "Deepak is going to marry to me, only me",
        // },
        // {   sender: "Deepak",
        //     content: "So, let's get married today ?",
        // },
        // {   sender: "Leonor",
        //     content: "Okay I'm coming Love you Jaanu",
        // },
       
       
    ]);

    useEffect(() => {
        async function loadMessages() {
          try {
            const messages = await getMessagess(roomId);
            // console.log(messages);
            setMessages(messages);
          } catch (error) {}
        }
        if (connected) {
          loadMessages();
        }
      }, []);

      useEffect(() => {
        if (chatBoxRef.current) {
          chatBoxRef.current.scroll({
            top: chatBoxRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, [messages]);

        useEffect(()=>{
            const connectWebSocket=()=>{
            const sock = new SockJS(`${baseURL}/chat`);
      const client = Stomp.over(sock);

      client.connect({}, () => {
        setStompClient(client);

        toast.success("connected");
        client.subscribe(`/topic/room/${roomId}`, (message) => {
            console.log("Received message:", message);
            const newMessage = JSON.parse(message.body);
            setMessages((prev) => [...prev, newMessage]);
        });
      });
    };

    if (connected) {
      connectWebSocket();
    }
        },[roomId])
        // Send Message Handled
        const sendMessage= async()=>{
            
            if(stompClient && connected && input.trim()){
               
                const message={
                    sender:currUser,
                    content:input,
                    roomId:roomId,
                }
                stompClient.send(`/app/sendMessage/${roomId}`,{},JSON.stringify(message));
                setInput("");
            }
        }
        

        function handleLogout() {
            stompClient.disconnect();
            setConnected(false);
            setRoomId("");
            setCurrentUser("");
            navigate("/");
          }

    return(<>
        <header className="fixed p-1 w-full text-semibold flex justify-between items-center dark:bg-gray-700">
            <div className="ml-4">
                <h1>Room:{roomId}</h1>
            </div>
            <div>
                <h1>User:{currUser}</h1>
            </div>
            <div className="mr-4">
                <button className="rounded-full dark:bg-red-600 hover:dark:bg-red-900 p-3"
                onClick={handleLogout}
                >
                    LeaveRoom
                </button>
            </div>
        </header>
        <main className="py-20 px-10 dark:bg-gray-600 mx-auto w-2/3 h-screen overflow-auto">
            {
                messages.map((message,index)=>{
                   return(
                    <div key={index} 
                    // className={`flex ${message.sender===currUser}? "justify-end" : "justify-start" `}
                    className={`flex rounded ${message.sender === currUser ? "justify-end" : "justify-start"}`}
                    >

                        <div className={`my-2 max-w-xs rounded  ${message.sender === currUser ? "dark:bg-green-500":"dark:bg-blue-500"}`}>
                            <div className="flex flex-row gap-2 p-2">
                                <img className="h-12 w-11 pt-1 pb-1 pl-1" src={`https://avatar.iran.liara.run/username?username=${message.sender}`} alt="DM"/>
                                <div  className="flex flex-col gap-1">
                                    <p className="text-sm font-bold">{message.sender}</p>
                                    <p>{message.content}</p>
                                    <p className="text-xs text-gray-700">
                                    {timeAgo(message.timeStamp)}
                                    </p>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    );
                })
            }
        </main>
        <div className="bottom-10 fixed w-full py-2 flex justify-between items-center">
            <div className="flex gap-2 py-1 w-2/3 mx-auto  dark:bg-gray-800 rounded">
                <input placeholder="             Write your Chat Here..." 
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value);
                    }}
                    type="text"
                    className="dark:bg-gray-900 py-2 rounded-full w-full mr-15 ml-10"
                />
                <div className="flex justify-between gap-6 mr-5 p-2">
                <button className="bg-green-600 rounded-full p-2">
                    <MdAttachFile size={20} />
                </button>
                <button className="bg-blue-600 rounded-full p-2"
                    onClick={sendMessage}
                    >
                    <MdSend size={20} />
                </button>
                </div>
            </div>
        </div>
    </>);
}

export default ChatPage;