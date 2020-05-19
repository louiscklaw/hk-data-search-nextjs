import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalContext';
import {LangContext} from '../context/LangContext';

import ApiCard from './ApiCard';

function CardList(){
  const {match_api_list} = useContext(GlobalContext);
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
              .filter( x => x!=null)
              .map((x) => {
              return (
                <ApiCard
                  key={x}
                  className="card"
                  api_id={x[0]}
                  title={x[0]}
                  description={x[1]}
                  tag={['1','2','3']}
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
