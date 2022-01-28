import React from 'react';
import  GlobalStyle  from './styles/global';
import Dashboard from './pages/Dashboard';
import { Container } from 'react-dom';

const App: React.FC = () =>{

  return (

    <>
    <Dashboard/>
    <GlobalStyle/>
    </>
  );
}

export default App;
