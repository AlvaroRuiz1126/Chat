import React from 'react';
import { Searchbox } from './Searchbox';
import { Sidebar } from './Sidebar';

export const InboxPeople = () => {
    return (
        <>
            {/* <!-- Inbox people inicio --> */}
            < div className="inbox_people" >

                <Searchbox />

                <Sidebar />

            </div >
            {/* <!-- Inbox people Fin --> */}
        </>
    );
};