package com.deepakchatapp.chat_app_backend.Controller;

import com.deepakchatapp.chat_app_backend.Entities.Message;
import com.deepakchatapp.chat_app_backend.Entities.Room;
import com.deepakchatapp.chat_app_backend.Payload.MessageRequest;
import com.deepakchatapp.chat_app_backend.Repository.RoomRepository;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Controller
@CrossOrigin(origins ="http://localhost:5173")
public class Chatcontroller {

    private RoomRepository roomRepository;
    public Chatcontroller(RoomRepository roomRepository){
        this.roomRepository=roomRepository;
    }

    // for sending and receving messages
    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message SendMessage(
            @DestinationVariable String roomId
            ,
            @RequestBody MessageRequest request
    ){
        Room room =roomRepository.findByRoomId(request.getRoomId());
        Message message=new Message();

        message.setContent(request.getContent());
        message.setSender(request.getSender());
        message.setTimeStamp(LocalDateTime.now());
        message.toString();
        if(room!=null){
            room.getMessage().add(message);
            roomRepository.save(room);
        }else{
            throw  new RuntimeException("Room not Found!!");
        }
        return message;


    }
}
