package com.deepakchatapp.chat_app_backend.Controller;


import com.deepakchatapp.chat_app_backend.Entities.Message;
import com.deepakchatapp.chat_app_backend.Entities.Room;
import com.deepakchatapp.chat_app_backend.Services.Roomservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class Roomcontroller {
    @Autowired
    Roomservices roomservices;

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId) {

        if (roomservices.CheckingRoomIdPresent(roomId) != null) {
            return ResponseEntity.badRequest().body("Room already exist");
        }

        // Create New Rooms
        Room room = new Room();
        room.setRoomId(roomId);
        Room savedRoom=roomservices.savingRoomtoDB(room);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId){
        Room room =roomservices.CheckingRoomIdPresent(roomId);
        if(room==null){
            return ResponseEntity.badRequest().body("Room not found !");
        }
        return ResponseEntity.ok(room);
    }
    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String roomId){
        Room room =roomservices.CheckingRoomIdPresent(roomId);
        if(room==null){
            return ResponseEntity.badRequest().build();
        }
        List<Message> messages=room.getMessage();
        return ResponseEntity.ok(messages);

    }

}
