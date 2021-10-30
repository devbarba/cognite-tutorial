
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasicCard from './Cards';
import AppBar from './Appbar';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

ReactDOM.render(
    <AuthProvider>
        <AppBar/>
        <BasicCard />
        <App />
    </AuthProvider>,
    document.getElementById('root')
);