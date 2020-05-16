import React, {useContext} from 'react';

import {LangContext} from '../context/LangContext';

import Links from '../components/Links';
import ChangeLang from './TestButton';
import meanings from '../lang/meanings';

function Nav(){
  const {say, active_lang,changeLang} = useContext(LangContext);

  function handleOnChange(e){
    if (active_lang=='en_us'){
      changeLang('zh_hk');
    }else{
      changeLang('en_us');
    }

  }

  function handleOnClick(e){
    console.log(say(meanings.HELLOWORLD))
  }

  return(
    <>
      <Links />

      <ChangeLang
        defaultValue={active_lang}
        onChange={handleOnChange}
        ></ChangeLang>

      <button onClick={(e)=>{handleOnClick(e)}}>test</button>
    </>
  )
}

export default Nav;
