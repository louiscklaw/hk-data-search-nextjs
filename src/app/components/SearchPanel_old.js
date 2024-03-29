import React, {useContext} from 'react';
import {Hero, Container, Title} from 'rbx';

import InputBox from './InputBox';
import Nav from './Nav';

import {GlobalContext, LangContext} from '../context';

import {meanings} from '../lang'

function SearchApi(){
  const {updateSearchFilter, match_api_list} = useContext(GlobalContext);
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
            <pre>
              Number of match
              <br/>
              {match_api_list ? match_api_list.length : 0}
            </pre>
          </Container>
        </Hero.Body>
      </Hero>
    </>
  )
}

export default SearchApi;
