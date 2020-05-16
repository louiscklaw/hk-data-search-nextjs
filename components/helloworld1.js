import React, {useContext} from 'react';

import Link from 'next/link';

import {GlobalContext} from '../context/GlobalContext';
import {LangContext} from '../context/LangContext';

function Helloworld1(){
  let {helloworld} = useContext(GlobalContext)
  let {active_lang} = useContext(LangContext);
  return(
    <>
      Helloworld1
      {active_lang}
      <Link href="/">
        <a>back</a>
      </Link>
    </>
  )
}

export default Helloworld1
