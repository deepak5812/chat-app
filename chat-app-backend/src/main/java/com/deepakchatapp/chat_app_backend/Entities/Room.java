package com.deepakchatapp.chat_app_backend.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

//@Document(collection = "rooms")
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//public class Room {
//
//
//
//
//    @Id
//    private String id;
//    private String roomId;
//    private List<Message> message;
//    public Room(){
//
//    }
//    public Room(String id, String roomId, List<Message> message) {
//        this.id = id;
//        this.roomId = roomId;
//        this.message =new ArrayList<>();
//    }
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getRoomId() {
//        return roomId;
//    }
//
//    public void setRoomId(String roomId) {
//        this.roomId = roomId;
//    }
//
//    public List<Message> getMessage() {
//        return message;
//    }
//
//    public void setMessage(List<Message> message) {
//        this.message = message;
//    }
//}
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "rooms")
public class Room {

    @Id
    private String id; // Mongo DB: unique identifier
    private String roomId;
    private List<Message> messages = new ArrayList<>();

    public Room() {
    }

    public Room(String id, String roomId) {
        this.id = id;
        this.roomId = roomId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public List<Message> getMessage() {
        return messages;
    }

    public void setMessage(List<Message> messages) {
        this.messages = messages;
    }
}
