import { StylesProvider } from '@material-ui/core';
import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home'
import './styles/global.css'

function App() {
  return (
    <StylesProvider injectFirst>
    <Home/>
    </StylesProvider>
  );
}

export default App;
