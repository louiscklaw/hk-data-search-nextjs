import React, {useContext} from 'react';
import Link from 'next/link';
import {Navbar, Button} from 'rbx';

import {LangContext} from '../context/LangContext';
// import {LangContext} from '../../context';

// import Links from '../Links';
import Links from './Links';

import {LANG} from '../lang';
import meanings from '../lang/meanings';
// import meanings from '../../lang/meanings';
// import {meanings} from '../../lang/index';

import NavItem from './Nav/NavItem';
import NavLoginButton from './Nav/NavLoginButton';
import NavSignUpButton from './Nav/NavSignUpButton';

import NavChangeLang from './Nav/NavChangeLang';

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
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item"> About </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
