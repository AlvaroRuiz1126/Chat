import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {
    const {chatState} = useContext(ChatContext);
    const {auth} = useContext(AuthContext);

    return (
        <>
            {/* <!-- Chat inicio --> */}
            <div className="mesgs">

                {/* <!-- Historia inicio --> */}
                <div className="msg_history" id="messages">

                    {chatState.messages.map(message => (
                        (message.para === auth.uid)
                            ? <IncomingMessage key={message._id} message={message} />
                            : <OutgoingMessage key={message._id} message={message} />
                    ))}

                </div>
                {/* <!-- Historia Fin --> */}

                <SendMessage />

            </div>
            {/* <!-- Chat Fin --> */}
        </>
    );
};
