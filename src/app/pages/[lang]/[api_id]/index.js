import React from 'react';
import Link from 'next/link';

import {Footer} from '../../../components'


function ApiIdIndex({api_id}){
  return(
    <>
      {api_id}
      ApiIdIndex
      <Link href={ '/en' } >
        <a>Back</a>
      </Link>

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

export default ApiIdIndex
