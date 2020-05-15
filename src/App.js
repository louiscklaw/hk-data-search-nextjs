import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import Footer from './components/Footer/Footer'
import AppMain from './pages/AppMain/AppMain'

import GlobalContextProvider from './contexts/GlobalContext';

import './App.css';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <div className="App">
          helloworld
          <AppMain />
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
