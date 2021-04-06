import React from 'react';
import { hourMonth } from '../helpers/date';

export const IncomingMessage = ({message}) => {

    return (
        <>
            {/* <!-- Mensaje recibido Inicio --> */}
            <div className="incoming_msg">
                <div className="incoming_msg_img">
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{message.message}</p>
                        <span className="time_date">{hourMonth(message.createdAt)}</span>
                    </div>
                </div>
            </div>
            {/* <!-- Mensaje recibido Fin --> */}
        </>
    );
};