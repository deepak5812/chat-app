package com.deepakchatapp.chat_app_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config){
        // "/topic" routing means that server send the messages to all the routes starting with topic
        config.enableSimpleBroker("/topic");
        // this below lines means that the client send the messages to this given "/app" routes
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry){
        // This below line is used to establish the WebSocket Connection using STOMP(Simple Text Oriented Message Protocol)
        // And SockJs() is used to haldled the fall back of the Websocket
        registry.addEndpoint("/chat").setAllowedOrigins("http://localhost:3000").withSockJS();
    }

}
