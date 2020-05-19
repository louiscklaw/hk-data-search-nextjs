import React, {useContext, useEffect} from 'react';
import Router from 'next/router'
import Head from 'next/head'

import App from '../../components/App';
import {LangContext} from '../../context';

function Index(){
  const {default_lang, lang_list, say, meanings} = useContext(LangContext)

  useEffect(() => {
    if (typeof(Router.query.lang) != 'undefined' &&  lang_list.indexOf(Router.query.lang) == -1){
      Router.replace(`/${default_lang}`)
    }
  })

  return(
    <>
      <Head>
        <title>{say(meanings.LINK_INDEX)}</title>
      </Head>
      <App />
    </>
  )
}

export default Index;
