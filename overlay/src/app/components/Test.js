import React, {useContext} from 'react';

import {TestContext} from '../context/TestContext';

function Test() {
  let {hello_state} = useContext(TestContext)
  return(
    <>
      Testing Context
      {hello_state}
    </>
  )
}

export default Test
