import React, { useEffect, useState } from 'react';
import ViewChatArea from './chatArea';
import ViewChatList from './chatList';

export default function ViewMessage() {
    return (
        <div>
            <div className={`mt-3 mb-3  msgHeading }`}>
                <h1> Message</h1>
            </div>
            <div className={`row g-0 mainContainer`}>
                <div className={`col-md-4 chatListProfile`}>
                    <ViewChatList
                    />
                </div>
                <div className={`col-md-7 chatAreaContainer`}>
                    <div>
                        <ViewChatArea
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
