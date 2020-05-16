import React from 'react';

function InputBox(props){

  function handleOnChange(e){
    e.preventDefault();
    props.onChange(e.target.value);
  }

  return(
    <>
      <input defaultValue='searchAPI' onChange={(e) => handleOnChange(e)}/>
    </>
  )
}

export default InputBox;
