import React, { useState } from 'react';
import { Avatar } from "primereact/avatar";

const ViewChatHeader = ({ }) => {
    const colorPallete = {
        1: { background: 'FFD700', text: '000000' },
        2: { background: 'FF4500', text: 'FFFFFF' },
    };

    return (
        <div>
           <div className={`d-flex align-items-center chatHeader`}>
                    <div className={`profileImg`}>
                            <Avatar
                                className={`avatarStyle`}
                                label='AS'
                            />
                    </div>
                    <div className={`cardContent`}>
                        {/* <h1>{user?.userName}</h1>
                        <h3>{user?.userType}</h3> */}
                        <h1>Ashish</h1>
                        <h3>Dev</h3>
                    </div>
                </div>
        </div>
    )
}

export default ViewChatHeader