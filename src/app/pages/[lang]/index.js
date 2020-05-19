import React, {useContext, useEffect} from 'react';
import App from '../../components/App';

import {LangContext} from '../../context';

import Router from 'next/router'



function Index(){
  const {default_lang, lang_list} = useContext(LangContext)

  useEffect(() => {
    if (typeof(Router.query.lang) != 'undefined' &&  lang_list.indexOf(Router.query.lang) == -1){
      Router.replace(`/${default_lang}`)
    }
  })

  return(
    <>
      <App />
    </>
  )
}

export default Index;
