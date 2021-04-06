import React from 'react';
import { hourMonth } from '../helpers/date';

export const OutgoingMessage = ({message}) => {
    return (
        <>
            {/* <!-- Mensaje enviado inicio --> */}
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{message.message}</p>
                    <span className="time_date">{hourMonth(message.createdAt)}</span>
                </div>
            </div>
            {/* <!-- Mensaje enviado inicio --> */}
        </>
    );
};