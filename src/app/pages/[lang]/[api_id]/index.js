import React from 'react';
import Link from 'next/link';

function ApiIdIndex({api_id}){
  return(
    <>
      {api_id}
      ApiIdIndex
      <Link href={ '/en' } >
        <a>Back</a>
      </Link>
    </>
  )
}

export async function getServerSideProps(context){

  return {
    props: context.params
  }
}

export default ApiIdIndex
