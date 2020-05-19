import React from 'react';

import InputBox from './InputBox';
import {GlobalContext, LangContext} from '../context';

import {meanings} from '../lang'

function Hero(){
  const {updateSearchFilter, match_api_list} = React.useContext(GlobalContext);
  const {say} = React.useContext(LangContext);
  return(
<section class="hero is-info is-medium is-bold">
  <div class="hero-head">

  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        {say(meanings.SITE_TITLE)}
      </h1>


      <h2 class="subtitle">
        hong kong statistics search
      </h2>

      <InputBox onChangeSearchFilter={updateSearchFilter}></InputBox>

      <div style={{paddingTop: "30px;"}}>
        Number of match {match_api_list ? match_api_list.length : 0}
      </div>

    </div>
  </div>
</section>
  )
}

export default Hero
