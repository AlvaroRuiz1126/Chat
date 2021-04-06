import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {
    const {chatState} = useContext(ChatContext);
    const {auth} = useContext(AuthContext);

    return (
        <>
            {/* <!-- Sidebar inicio --> */}
            <div className="inbox_chat">

                {
                    //con el filter primero se hace un filtro del arreglo de los usuarios con el id diferente al que se loguea
                    //y luego ese arreglo que queda es el que se recorre con el map
                    chatState.userList
                    .filter(user => user.uid !== auth.uid)
                    .map((user) => (
                        <SidebarChatItem 
                            key={user.uid}
                            user={user}
                        />
                    ))
                }

                {/* <!-- Espacio extra para scroll --> */}
                <div className="extra_space"></div>

            </div>
            {/* <!-- Sidebar Fin --> */}
        </>
    );
};