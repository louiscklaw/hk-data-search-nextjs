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
    console.log(say(meanings.HELLOWORLD))
  }

  return(
    <>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <NavItem href={`${getCurrentLang()}/`} text={say(meanings.LINK_INDEX)}></NavItem>
            <NavItem href={`${getCurrentLang()}/about`} text={say(meanings.LINK_ABOUT_ME)}></NavItem>
            <NavItem href={`${getCurrentLang()}/test`} text={say(meanings.TEST_PAGE)}></NavItem>
          </Navbar.Segment>
          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
                <NavChangeLang></NavChangeLang>
                <NavSignUpButton></NavSignUpButton>
                <NavLoginButton></NavLoginButton>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </>
  )
}

export default Nav;
