import React, { createContext, useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { scrollToBottomAnimated } from "../helpers/scrollToBottom";
import { useSocket } from "../hooks/useScoket";
import { types } from "../types/types";
import { ChatContext } from "./chat/ChatContext";

export const SocketContext = createContext();

export const SocketProvider = ({children}) => {
    const {socket, online, socketConnect, socketDisconnect} = useSocket('http://localhost:8080');
    const {auth} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);

    useEffect(() => {
        if(auth.logged){
            socketConnect();
        }
    }, [auth, socketConnect]);

    useEffect(() => {
        if(!auth.logged){
            socketDisconnect();
        }
    }, [auth, socketDisconnect]);

    useEffect(() => {
        socket?.on('lista-usuarios', (users) => {
            dispatch({
                type: types.usersLoaded,
                payload: users,
            });
        })
    }, [socket, dispatch]);

    useEffect(() => {
        socket?.on('mensaje-personal', (message) => {
            dispatch({
                type: types.newMessage,
                payload: message,
            });
            
            //scroll al final del chat
            scrollToBottomAnimated('messages');
        });

    }, [socket, dispatch]);

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    );
};