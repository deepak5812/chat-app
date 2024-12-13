package com.deepakchatapp.chat_app_backend.Repository;

import com.deepakchatapp.chat_app_backend.Entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends MongoRepository<Room,String> {

    Room findByRoomId(String roomId);
}
