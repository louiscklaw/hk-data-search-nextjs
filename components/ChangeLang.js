import React from 'react';

function ChangeLang(props){
  return(
    <>
      <input id="active_lang" defaultValue={props.defaultValue}></input>
      <button onClick={(e) => props.onChange(e)}>update</button>
    </>
  )
}

export default ChangeLang;
