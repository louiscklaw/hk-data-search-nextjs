import React, {useContext} from 'react';

import InputBox from './InputBox';
import Nav from './Nav';

import {GlobalContext} from '../context/GlobalContext';
import { LangContext } from '../context/LangContext';

function SearchApi(){
  const {changeTheWorld} = useContext(GlobalContext);
  const {say} = useContext(LangContext);

  return(
    <>
      <Nav></Nav>
      {say('SITE_TITLE')}
      <InputBox onChange={changeTheWorld}></InputBox>
    </>
  )
}

export default SearchApi;
