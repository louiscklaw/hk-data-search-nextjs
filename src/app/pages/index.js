import React from 'react';
import Router from 'next/router';

function Index(){
  React.useEffect(() => {
    Router.replace('/[lang]','/en')
  })
  return(
    <></>
  )
}

export default Index;
