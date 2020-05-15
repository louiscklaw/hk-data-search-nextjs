import React, {useContext} from 'react';

import Nav from './Nav'

import {GlobalContext} from '../contexts/GlobalContext';

function Hero(props){
  const {updateHelloworld} = useContext(GlobalContext);

  function handleOnChange(in_text) {
    console.log(in_text);
    updateHelloworld(in_text);
  }
  return(
    <>
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">香港統計數字</h1>
            <p className="control has-icons-left">
              <input
                id="search_input"
                className="input is-rounded is-large"
                type="text"
                placeholder="Search"
                onChange={(e) => handleOnChange(e.target.value)}
                value={props.search_string}
                />

              <span className="icon is-small is-left">
                <i className="fas fa-binoculars"></i>
              </span>
            </p>
            <p className="subtitle is-6 total-api-count">

            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;