import React from 'react';

import {LangContext} from '../../context'

function NavSignUp(){
  const {say, meanings} = React.useContext(LangContext)
  return(
    <>
      <a className="button is-primary">
        <strong>{say(meanings.SIGN_UP) }</strong>
      </a>

      <a className="button is-light">
        {say(meanings.LOG_IN)}
      </a>
    </>
  )
}

export default NavSignUp
