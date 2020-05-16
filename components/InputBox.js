import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalContext';
import {LangContext} from '../context/LangContext';

import meanings from '../lang/meanings';

function InputBox(props){
  const {search_filter} = useContext(GlobalContext);
  const {say} = useContext(LangContext);

  function handleOnChange(e){
    e.preventDefault();
    props.onChange(e.target.value);
  }

  return(
    <>
      <input defaultValue={search_filter || say(meanings.DEFAULT_SEARCH_TEXT)} onChange={(e) => handleOnChange(e)}/>
    </>
  )
}

export default InputBox;
