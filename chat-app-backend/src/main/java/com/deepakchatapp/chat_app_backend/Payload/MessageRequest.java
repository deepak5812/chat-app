package com.deepakchatapp.chat_app_backend.Payload;

import java.time.LocalDateTime;

public class MessageRequest {

    private String content;
    private String sneder;
    private String roomId;
    private LocalDateTime messageTime;

    public MessageRequest(){}

    public MessageRequest(String content, String sneder, String roomId, LocalDateTime messageTime) {
        this.content = content;
        this.sneder = sneder;
        this.roomId = roomId;
        this.messageTime = messageTime;
    }
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSneder() {
        return sneder;
    }

    public void setSneder(String sneder) {
        this.sneder = sneder;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public LocalDateTime getMessageTime() {
        return messageTime;
    }

    public void setMessageTime(LocalDateTime messageTime) {
        this.messageTime = messageTime;
    }




}
