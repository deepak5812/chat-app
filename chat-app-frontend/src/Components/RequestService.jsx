import axios from "axios";
import { httpClient } from "../Routers/AxiosHelper";

export const createRoomApi= async (roomDetails)=>{

    const response=await httpClient.post(`/api/v1/rooms`,roomDetails,
        { headers: { 'Content-Type': 'text/plain',
            post:{
            "Access-Control-Allow-Origin": true
        },
         } },
    );
    return response.data;

};
export const joinChatApi= async(roomId)=>{

    const response = await httpClient.get(`/api/v1/rooms/${roomId}`);
    return response.data;
}

export const getMessagess = async (roomId, size = 50, page = 0) => {
    const response = await httpClient.get(
      `/api/v1/rooms/${roomId}/messages?size=${size}&page=${page}`
    );
    return response.data;
  };
