import React, {useContext, useEffect} from 'react';
import App from '../../components/App';

import {LangContext} from '../../context';

function Index({lang}){
  return(
    <>

      <App lang={lang}/>
    </>
  )
}

export async function getServerSideProps(context){

  return {
    props: context.params
  }
}


export default Index;
