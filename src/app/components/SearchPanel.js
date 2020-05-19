import React, {useContext} from 'react';
import {Container, Title} from 'rbx';

import InputBox from './InputBox';
import Nav from './Nav';

import {GlobalContext, LangContext} from '../context';

import {meanings} from '../lang'
import Hero from './Hero'

function SearchApi(){
  const {updateSearchFilter, match_api_list} = useContext(GlobalContext);
  const {say} = useContext(LangContext);

  return(
    <>
      <Nav></Nav>
      <Hero></Hero>
    </>
  )
}

export default SearchApi;
