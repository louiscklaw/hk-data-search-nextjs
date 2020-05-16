import React, {useContext} from 'react';
import {Hero, Container, Title} from 'rbx';

import InputBox from './InputBox';
import Nav from './Nav';

import {GlobalContext, LangContext} from '../context';

import {meanings} from '../lang'

function SearchApi(){
  const {updateSearchFilter} = useContext(GlobalContext);
  const {say} = useContext(LangContext);

  return(
    <>
      <Nav />
      <Hero color="light">
        <Hero.Body>
          <Container>
            <Title>{say(meanings.SITE_TITLE)}</Title>
            <Title as="h2" subtitle>
              {say(meanings.SITE_TITLE_EXPLAIN)}
            </Title>

            <InputBox onChangeSearchFilter={updateSearchFilter}></InputBox>

          </Container>
        </Hero.Body>
      </Hero>
    </>
  )
}

export default SearchApi;
