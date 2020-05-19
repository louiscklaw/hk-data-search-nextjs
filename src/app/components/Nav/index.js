import React, {useContext} from 'react';
import Link from 'next/link';
import {Navbar, Button} from 'rbx';

import {LangContext} from '../../context';
// import {LangContext} from '../../context';

// import Links from '../Links';
import Links from '../Links';

import {LANG} from '../../lang';
import meanings from '../../lang/meanings';
// import meanings from '../../../lang/meanings';
// import {meanings} from '../../../lang/index';

import NavItem from './NavItem';
import NavLoginButton from './NavLoginButton';
import NavSignUpButton from './NavSignUpButton';

import NavChangeLang from './NavChangeLang';

import { get_link } from '../../util';

function Nav(){
  const {say, getCurrentLang,changeLang} = useContext(LangContext);

  function handleOnChange(e){
    if (active_lang==LANG.EN){
      changeLang(LANG.ZH);
    }else{
      changeLang(LANG.EN);
    }

  }

  function handleOnClick(e){
  }

  return(
    <>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavItem name={say(meanings.LINK_INDEX)} to_href={'/'}></NavItem>
            <NavItem name={say(meanings.LINK_ABOUT_ME)} to_href={'/about'}></NavItem>

          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">

                <NavChangeLang></NavChangeLang>
                <NavSignUpButton></NavSignUpButton>
              </div>
            </div>
          </div>
        </div>



      </nav>
    </>
  )
}

export default Nav;
