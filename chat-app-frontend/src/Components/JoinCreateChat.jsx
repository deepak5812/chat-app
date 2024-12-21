import { React,useState } from "react";
import chatIcon from "../assets/open.png";
import toast from 'react-hot-toast';
import { createRoomApi } from "./RequestService";
function JoinCreateChat(){
    const [details,setDetails]=useState({
        roomId:'',
        userName:'',
    })
    function handleFormInputChange(event){
        setDetails({
            ...details,
            [event.target.name]:event.target.value,
        })
    }
    function joinChat(){
        if(validateForm()){

        }
    }
    async function createRoom(){
        if(validateForm()){
            try{
                const response = await createRoomApi(details.roomId);
                console.log(response);
                toast.success("Room Created Successfully !! ");
                joinChat();
            }   
            catch(error){
                if(error.status==400){
                    toast.error("Room Already Created !!");
                }
              
                console.log("Error in creating Room");

            }
        }

    }
    function validateForm(){
        console.log("Validate is called ")
        if(details.roomId==="" || details.userName===""){
            toast.error("Invalid Inputs !! ")
            return false;
        }
        return true;
    }
return(
    <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-10 flex flex-col gap-6 w-full max-w-md rounded dark: bg-gray-900 shadow">
                <img src={chatIcon} 
                className="w-24 flex mx-auto"
                 />
                <h1 className="text-2l font-semibold text-center">
                    Join/Create Rooms
                </h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name"
                        className="block font-medium mb2"
                        >
                        Name
                    </label>
                    <input 
                        type="text"
                        id="name"
                        name="userName"
                        onChange={handleFormInputChange}
                        value={details.userName}
                        placeholder="Enter your Name"
                        className="rounded-full w-full px-4 py-2  dark:bg-gray-600 dark:border-gray-600"
                    />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="roomId"
                    className="block font-medium mb2"
                    >
                        Room ID / create Room ID
                    </label>
                    <input 
                        type="text"
                        id="roomId"
                        name="roomId"
                        placeholder="Enter your room Id"
                        value={details.roomId}
                        onChange={handleFormInputChange}
                        className="rounded-full w-full px-4 py-2 dark:bg-gray-600 dark:border-gray-600"
                    />

                </div>
                <div className="flex justify-center gap-3">
                    
                <button
                className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full"
                onClick={()=>{joinChat()}}
                >
                    Join Room
                </button>
                <button
                className="px-3 py-2 dark:bg-green-500 hover:dark:bg-green-800 rounded-full"
                onClick={()=>{createRoom()}}
                >
                    Create Room
                </button>

                </div>
            </div>
            
        </div>
    </>
)
}

export default JoinCreateChat;