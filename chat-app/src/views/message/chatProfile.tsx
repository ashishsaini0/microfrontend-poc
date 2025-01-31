import React, { useState } from 'react';
import { Avatar } from "primereact/avatar";

const ViewChatProfile = ({ }) => {

    const goToChatArea = async () => {
        console.log("click");
    };

    return (
        <div className={`profileContainer`} onClick={() => goToChatArea()}>
            <div className={`profileCard`}>
                <div className='d-flex align-items-center'>
                    <div className={`profileImg`}>
                        <Avatar
                            className={`avatarStyle`}
                            label='AS'
                        />
                    </div>
                    <div className={`cardContent`}>
                        <h1>Ashish</h1>
                        <h3>Dev</h3>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewChatProfile