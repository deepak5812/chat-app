import React from "react";
import chatIcon from "../assets/open.png"
function JoinCreateChat(){
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
                        Your Name
                    </label>
                    <input 
                        type="text"
                        id="name"
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
                        className="rounded-full w-full px-4 py-2 dark:bg-gray-600 dark:border-gray-600"
                    />

                </div>
                <div className="flex justify-center gap-3">
                    
                <button
                className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full"
                onClick={()=>{}}
                >
                    Join Room
                </button>
                <button
                className="px-3 py-2 dark:bg-green-500 hover:dark:bg-green-800 rounded-full"
                onClick={()=>{}}
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