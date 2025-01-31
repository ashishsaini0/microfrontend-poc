import React, { lazy, Suspense, useEffect } from "react";

const ChatApp = lazy(() => import("chat/ChatApp"));
const EmailApp = lazy(() => import("email/EmailApp"));

const App = () => {
  return (
    <div>
      <h1>Main Application</h1>
      <Suspense fallback={<div>Loading Chat...</div>}>
        <ChatApp />
      </Suspense>
      <Suspense fallback={<div>Loading Email...</div>}>
        <EmailApp />
      </Suspense>
    </div>
  );
};

export default App;