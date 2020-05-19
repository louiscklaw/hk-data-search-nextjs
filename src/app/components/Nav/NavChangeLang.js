import React from 'react';
// import Link from 'next/link';
import Router from 'next/router'

import {LANG} from '../../lang';

import {lang_list,LangContext} from '../../context';

function NavChangeLang(){
  const {getCurrentLang} = React.useContext(LangContext);
  switch (getCurrentLang()) {
    case 'en':
      return(
        <>
          <a className="button is-light" onClick={(e)=> { Router.push('/'+LANG.ZH) }}>
            繁
          </a>
        </>
      )
      break;
    default:
      return(
        <>
          <a className="button is-light" onClick={(e)=> { Router.push('/'+LANG.EN) }}>
            En
          </a>
      </>
      )
      break;
  }


}

export default NavChangeLang
