import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

import {Button} from 'rbx';

import {LANG} from '../../lang';

function NavChangeLang(){
  return(
    <>
      <Button onClick={(e)=> { Router.push('/'+LANG.EN) }}>En</Button>
      <Button onClick={(e)=> { Router.push('/'+LANG.ZH) }}>繁</Button>
    </>
  )
}

export default NavChangeLang
