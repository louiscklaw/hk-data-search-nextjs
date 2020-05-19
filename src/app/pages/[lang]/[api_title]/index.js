import React, { useContext } from 'react';
import Link from 'next/link';

import {LangContext} from '../../../context'
import {Footer} from '../../../components'


function ApiTitleIndexPage({api_title}){
  const {getCurrentLang} = useContext(LangContext);

  return(
    <>
      {api_title}
      <Link href={ `/${getCurrentLang()}` } >
        <a>Back</a>
      </Link>

      Defails

      <pre>
        {JSON.stringify({test: 'testing'}, null, 1)}
      </pre>

      <Footer></Footer>
    </>
  )
}

export async function getServerSideProps(context){

  return {
    props: context.params
  }
}

export default ApiTitleIndexPage
