import React from 'react';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

const App: React.FC = function () {
  return (
    <PrimeReactProvider>
      <div>
        <AppRoutes />
      </div>
    </PrimeReactProvider>
  );
};

export default App;

