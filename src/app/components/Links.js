import React, {useContext} from 'react';
import Link from 'next/link';
import {LangContext} from '../context/LangContext';

import {meanings} from '../lang';

function Links(){
  let {say} = useContext(LangContext);
  return(
    <ul>
      <li>
        <Link href="/">
          <a>{say(meanings.LINK_INDEX)}</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>{say(meanings.LINK_ABOUT_ME)}</a>
        </Link>
      </li>
    </ul>
  )
}

export default Links
