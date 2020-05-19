import React from 'react';

import {LangContext} from '../../context'

function ApiTitleNotFound(){
  const {say, meanings} = React.useContext(LangContext)
  return(
    <>
      {say('api not found')}
    </>
  )
}

export default ApiTitleNotFound
