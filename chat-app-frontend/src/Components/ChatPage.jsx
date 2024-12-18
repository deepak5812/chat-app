import React from "react";

function ChatPage(){
    return(<>
        <header className="fixed p-1 w-full text-semibold flex justify-between items-center dark:bg-gray-700">
            <div className="ml-4">
                <h1>Room:FamilyRoom</h1>
            </div>
            <div>
                <h1>User:Deepak Mathur</h1>
            </div>
            <div className="mr-4">
                <button className="rounded-full dark:bg-red-600 hover:dark:bg-red-900 p-3">
                    LeaveRoom
                </button>
            </div>
        </header>
        <div className="bottom-4 fixed w-full dark:bg-gray-800 flex justify-between">
            <div className="flex gap-3">
                <input placeholder="Write your Chat Here..." 
                    className="dark:bg-gray-900"
                />
                <button>
                    A
                </button>
                <button>
                    B
                </button>
            </div>
        </div>
    </>);
}
export default ChatPage;