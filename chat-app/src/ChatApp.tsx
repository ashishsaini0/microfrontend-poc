import React from 'react';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';  // Import the Provider
import { store } from './redux/store';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

const ChatApp: React.FC = function () {
  return (
    <PrimeReactProvider>
      <Provider store={store}>  {/* Wrap your app with Provider */}
        <div>
          <AppRoutes />
        </div>
      </Provider>
    </PrimeReactProvider>
  );
};

export default ChatApp;
