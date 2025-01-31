import React, { useEffect, useState } from 'react';
import ViewChatProfile from './chatProfile'

const ViewChatList = ({ }) => {

  return (
    <div >
      <div className={`chatsContainer`}>
        <div className={`chat`}>
          <div>
            <ViewChatProfile
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewChatList