import React, {useContext, useEffect} from 'react';
import App from '../../components/App';

import {useRouter} from 'next/router';
import {LangContext} from '../../context';

function Index({lang}){
  // useEffect(()=>{
  //   if (typeof(lang) != "undefined" && lang != active_lang){
  //     console.log('update')
  //     changeLang(lang)
  //   }else{
  //     console.log('??')
  //   }
  // })
  console.log(window.location)

  return(
    <>
      <App />
    </>
  )
}

Index.getInitialProps = async ({req}) => {
  // const router = useRouter()
  // const {active_lang, changeLang} = useContext(LangContext)
  // const { lang } = router.query
  console.log(req.rawHeaders);
  const test = '123';
  return {test}
}

export default Index;
