import React, {FormEvent} from 'react';
import './styles/global.css';
import 'leaflet/dist/leaflet.css';
import Routes from './routes/';
import { AuthProvider } from './contexts/authContext'


function App() {

  return (
    <AuthProvider value={{login: false, token: '', user: {}}}>
        <Routes />
    </AuthProvider>
  );
}

export default App;
