import React, {useContext} from 'react';

import {LangContext} from '../context/LangContext';

import meanings from '../lang/meanings';

function CardList(){
  const {say} = useContext(LangContext);

  return(
    <>
      Cardlist
      {say(meanings.HELLOWORLD)}
    </>
  )
}

export default CardList;
