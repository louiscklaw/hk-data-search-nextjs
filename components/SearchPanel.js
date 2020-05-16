import React, {useContext} from 'react';

import InputBox from './InputBox';
import Nav from './Nav';

import {GlobalContext} from '../context/GlobalContext';
import { LangContext } from '../context/LangContext';

function SearchApi(){
  const {updateSearchFilter} = useContext(GlobalContext);
  const {say} = useContext(LangContext);

  return(
    <>
      <Nav></Nav>
      {say('SITE_TITLE')}
      {say('TEST')}
      <InputBox onChange={updateSearchFilter}></InputBox>
    </>
  )
}

export default SearchApi;
