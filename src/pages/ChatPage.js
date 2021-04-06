import React, { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { ChatContext } from '../context/chat/ChatContext';
import { Messages } from '../components/Messages';
import '../css/chat.css';

export const ChatPage = () => {
    const {chatState} = useContext(ChatContext);
    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {(chatState.activeChat)
                    ? <Messages />
                    : <ChatSelect />
                }
                
                

            </div>
        </div>
    );
};