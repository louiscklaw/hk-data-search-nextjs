import React from 'react';

import App from '../components/App';

import GlobalContextProvider from '../context/GlobalContext';
import LangContextProvider from '../context/LangContext';

function Index(){
  return(
    <GlobalContextProvider>
      <LangContextProvider>
        <App />
        <style jsx global>{`
          * {
            padding: 0px; margin: 0px; box-sizing: border-box;
          }
        `}</style>
      </LangContextProvider>
    </GlobalContextProvider>
  )
}

export default Index;
