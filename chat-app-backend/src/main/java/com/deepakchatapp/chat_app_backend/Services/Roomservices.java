package com.deepakchatapp.chat_app_backend.Services;


import com.deepakchatapp.chat_app_backend.Entities.Room;
import com.deepakchatapp.chat_app_backend.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Roomservices {

    @Autowired
    RoomRepository roomRepository;

    public Room CheckingRoomIdPresent(String roomId){
        Room room=roomRepository.findByRoomId(roomId);
        return room;
    }

    public Room savingRoomtoDB(Room room){

        return roomRepository.save(room);

    }



}
