import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import App from './App';
import ChatApp from './ChatApp';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>
);
