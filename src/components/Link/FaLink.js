import React from 'react';

function FaLink({href_in, fa_class_in}){
  return(
    <a href={href_in} target="_blank" >
      <i className={fa_class_in}></i>
    </a>
  )
}

export default FaLink;