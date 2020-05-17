import React, {useContext} from 'react';

import {GlobalContext} from '../context';

function Footer(){
  const {match_api_list} = useContext(GlobalContext);
  return(
    <>
      package list


            <pre>
              {
                JSON.stringify(
                  match_api_list
                )
              }
            </pre>
    </>
  )
}

export default Footer;
