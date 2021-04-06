import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { ChatProvider } from './context/chat/ChatContext';
import { SocketProvider } from './context/socketContext';
import { AppRouter } from './routers/AppRouter';
import moment from 'moment';
//para cambiar la fecha al formato español
import 'moment/locale/es';
moment.locale('es');

export const ChatApp = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    );
};