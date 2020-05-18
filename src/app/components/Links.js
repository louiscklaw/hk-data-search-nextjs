import React, {useContext} from 'react';
import Link from 'next/link';
import Router from 'next/router';

import {LangContext} from '../context/LangContext';

import {meanings} from '../lang';

import {get_link} from '../util';

function Links(){
  let {say, active_lang} = useContext(LangContext);

  return(
    <ul>
      <li>
        <Link href={get_link('/')}>
          <a>{say(meanings.LINK_INDEX)}</a>
        </Link>
      </li>
      <li>
        <Link href={get_link('/about')}>
          <a>{say(meanings.LINK_ABOUT_ME)}</a>
        </Link>
      </li>
    </ul>
  )
}

export default Links
