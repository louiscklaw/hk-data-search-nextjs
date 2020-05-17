import React from 'react';

import SearchPanel from '../components/SearchPanel';
import ApiCardList from '../components/ApiCardList';
import {Footer} from '../components';

function App(){
  return(
    <>
      <SearchPanel></SearchPanel>

      <ApiCardList></ApiCardList>

      <Footer></Footer>
    </>
  )
}

export default App;
