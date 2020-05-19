import React from 'react';
import Head from 'next/head';

import Links from '../../components/Links';
import Helloworld1 from '../../components/helloworld1';

import {LangContext} from '../../context';

function About(){
  const {say, meanings} = React.useContext(LangContext);
  return(
    <>
      <Head>
        <title>{say(meanings.LINK_ABOUT_ME)}</title>
      </Head>

      <Links />
      About helloworld
      <Helloworld1 />
    </>
  )
}

export default About;
