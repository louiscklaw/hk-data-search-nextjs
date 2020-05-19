import React , { Component, createContext } from 'react'
import {useRouter} from 'next/router';
import meanings from '../lang/meanings';

import zh from '../lang/zh'
import en from '../lang/en'

const default_lang = 'zh'
const current_lang = default_lang
const lang_list = ['zh','en']

export const LangContext = createContext({
  meanings,
  current_lang,
  default_lang,
  lang_list
});

function LangContextProvider(props){
  const {query} = useRouter();

  function getCurrentLang(){
    return query.lang
  }

  function say(meaning){
    if (query.lang == 'en') {
      if (Object.keys(en).indexOf(meaning) > -1){
        return en[meaning]
      }
      return meaning
    }else{
      if (Object.keys(zh).indexOf(meaning) > -1){
        return zh[meaning]
      }
      return zh[meaning]
    }
  }

  return (
    <LangContext.Provider value={{
      meanings,
      current_lang,
      default_lang,
      lang_list,

      say,
      getCurrentLang,

      }}>
      { props.children }
    </LangContext.Provider>
  );
}

export default LangContextProvider;
