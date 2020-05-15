import React, {useContext} from 'react';

import {GlobalContext} from '../../contexts/GlobalContext';

function ApiList(){
  const {helloworld} = useContext(GlobalContext)
  return(
    <div className="container">
      <div>
        <ul className="flex-container wrap">
          {helloworld+'abc'}
        </ul>
      </div>
    </div>
  )
}

export default ApiList;