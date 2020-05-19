import React , { Component, createContext } from 'react'
import {useRouter} from 'next/router';
import meanings from '../lang/meanings';

import zh from '../lang/zh'
import en from '../lang/en'

export const LangContext = createContext({
  meanings
});

function LangContextProvider(props){
  const {query} = useRouter();

  function say(meaning){
    if (query.lang == 'en') {
      console.log(en)
      return en[meaning]
    }else{
      return zh[meaning]
    }
  }

  return (
    <LangContext.Provider value={{
      meanings,
      say
      }}>
      { props.children }
    </LangContext.Provider>
  );
}

export default LangContextProvider;
