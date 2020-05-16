import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalContext';
import {LangContext} from '../context/LangContext';

import meanings from '../lang/meanings';

function CardList(){
  const {raw_all_api_manifest, getApiManifestKeys, getApiManifestTitle} = useContext(GlobalContext);

  const {say} = useContext(LangContext);

  return(
    <>
      package list
      <pre>
        {
          JSON.stringify(
            getApiManifestKeys().map(
              (x) => {return getApiManifestTitle(x)}
            )
          )
        }
      </pre>
    </>
  )
}

export default CardList;
