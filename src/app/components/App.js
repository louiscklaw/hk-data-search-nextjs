import React,{useContext} from 'react';

import SearchPanel from '../components/SearchPanel';
import ApiCardList from '../components/ApiCardList';
import {Footer} from '../components';

import {LangContext} from '../context'

function App({lang}){
  const {say} = useContext(LangContext);

  return(
    <>
      <SearchPanel></SearchPanel>
      <ApiCardList></ApiCardList>
      <Footer></Footer>
    </>
  )
}

export default App;
