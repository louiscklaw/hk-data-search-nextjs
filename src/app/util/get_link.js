import React,{useContext} from 'react';

import {LangContext} from '../context'

function get_link(in_href){
  let {getCurrentLang} = useContext(LangContext);
  console.log('/'+getCurrentLang()+in_href)
  return '/'+getCurrentLang()+in_href
}

export {
  get_link
}
