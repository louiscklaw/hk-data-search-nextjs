import React, {useContext} from 'react';
import Link from 'next/link';
import {Navbar, Button} from 'rbx';

import {LangContext} from '../../context';

function NavChangeLang(props){
  const {active_lang, changeLang} = useContext(LangContext)

  function changeLangOnClick(e){
  }

  return(
    <>
      <Button value="en_us" onClick={(e) => {changeLangOnClick(e)}}>En</Button>
      <Button value="zh_hk" onClick={(e) => {changeLangOnClick(e)}}>繁</Button>
    </>
  )
}

export default NavChangeLang
