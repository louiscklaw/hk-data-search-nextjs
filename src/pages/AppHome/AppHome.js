import React, { useContext } from 'react';

import Hero from '../../components/Hero';
import ApiList from '../../pages/ApiList/ApiList'

function AppHome(props){

  return(
    <div>
      <Hero show_search_input={true} />
      <section className="section">
        <ApiList
          search_filters={[]}
          all_api_list={props.all_api_manifest}
        />
      </section>
    </div>
  )
}

export default AppHome;