import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalContext';
import {LangContext} from '../context/LangContext';

import meanings from '../lang/meanings';

function CardList(){
const {match_api_list} = useContext(GlobalContext);
  const {say} = useContext(LangContext);
  return(
    <>
      package list
      <pre>
        Number of match
        <br/>
        {match_api_list ? match_api_list.length : 0}
      </pre>

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

export default CardList;
