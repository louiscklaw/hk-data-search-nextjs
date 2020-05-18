import React,{useContext} from 'react';

import {LangContext} from '../context'

function get_link(in_href){
  let {active_lang} = useContext(LangContext);
  return '/'+active_lang+in_href
}

export {
  get_link
}
