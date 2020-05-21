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
            <span style={{paddingRight: '10px'}}>
              <i class="fas fa-globe-asia" ></i>
            </span>繁
          </a>
        </>
      )
      break;
    default:
      return(
        <>
          <a className="button is-light" onClick={(e)=> { Router.push('/'+LANG.EN) }}>
            <span style={{paddingRight: '10px'}}>
              <i class="fas fa-globe-europe" ></i>
            </span>En
          </a>
      </>
      )
      break;
  }
}

export default NavChangeLang
