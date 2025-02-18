import React from 'react';
import ReactDOM from 'react-dom/client';
import EmailApp from './EmailApp';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(<EmailApp />);