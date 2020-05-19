import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalContext';
import {LangContext} from '../context/LangContext';

import ApiCard from './ApiCard';

function CardList(){
  const {match_api_list, getApiManifestByApiTitle} = useContext(GlobalContext);

  return(
    <>
      <div className="api-card-list"
        style={{
          minHeight: "400px",

          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
        >
          {

            match_api_list
              .filter( x => x!=null )
              .map((x) => {
                const current_api = getApiManifestByApiTitle(x)

                return (
                  <ApiCard
                    // TODO: better key handling
                    key={current_api.id}
                    className="card"
                    api_id={x}
                    title={x}
                    description={current_api.result.notes}
                    tags={[
                      current_api.result.maintainer
                    ]}
                    link='//www.google.com'
                  />
                )
            })
          }
      </div>
    </>
  )
}

export default CardList;
