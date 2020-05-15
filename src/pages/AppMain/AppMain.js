import React from 'react';

import { withRouter } from "react-router";
import {Switch, Route} from 'react-router-dom'

import Hero from '../../components/Hero';

import About from '../About/About'
import Stat from '../Stat/Stat'
import ChartjsDraft from '../ChartjsDraft/ChartjsDraft'
import TestPage from '../TestPage/TestPage'
import FilterByTags from '../FilteredPage/FilterByTags';

import ApiDetail from '../ApiDetail'
import AppHome from '../AppHome/AppHome';
import { debugLog } from '../../common';

function AppMain(props){
  return(
    <Switch>
      <Route exact path="/">
        <AppHome></AppHome>
      </Route>

      <Route path="/stat">
        {/* <ScrollToTop /> */}
        <Hero show_search_input={false} />
        <section className="section">
          <Stat />
        </section>
      </Route>

      <Route path="/about">
        {/* <ScrollToTop /> */}
        <Hero show_search_input={false} />
        <section className="section">
          <About />
        </section>
      </Route>

      <Route path="/testpage">
        {/* <ScrollToTop /> */}
        <Hero show_search_input={false} />
        <section className="section">
          <TestPage />
        </section>
      </Route>

      <Route path="/chartjs_draft">
        {/* <ScrollToTop /> */}
        <Hero show_search_input={false} />
        <section className="section">
          <ChartjsDraft />
        </section>
      </Route>

      <Route path="/api_detail/:api_name">
        {/* <ScrollToTop /> */}
        <Hero show_search_input={false} />
        <section className="section">
          <ApiDetail api_catalogue={props.all_api_manifest}/>
        </section>
      </Route>

      <Route path="/by_tags/:filter_by_tags">
        <FilterByTags></FilterByTags>
      </Route>

    </Switch>
  )
}

export default AppMain;