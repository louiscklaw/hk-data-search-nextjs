import React, {useContext} from 'react';
// import {Card, Icon, Content} from 'rbx';
import Link from 'next/link'

import {LangContext} from '../context';
import {get_link} from '../util';

function getTags(tags){
  return(
    <>
      {
        tags.map((x) => {
          return(
            <span key={x} className="tag is-primary is-light">{x}</span>
          )
        })
      }
    </>
  )
}

function ApiCard(props){
  let {say, meanings, getCurrentLang} = useContext(LangContext);
  return(
    <>
      <div style={{
        minHeight: '250px',
        width: "250px",
        margin: "30px"
        }}>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="api-title">
                {props.title}
              </div>

              <div className="api-description">
                {props.description}
              </div>

              <div className="api-spacing">

              </div>

              <div className="api-tags">
                tags:
                  {getTags(props.tags)}
              </div>


              <div className="api-output-format">
                {say(meanings.API_OUTPUT_FORMAT)}: {props.format}
              </div>

              <div className="last-update">
                <span className="last-update-label">{say(meanings.LAST_UPDATE)}</span>
                <time dateime="2016-1-1">11/22/33</time>
              </div>
            </div>
          </div>

          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              <div className="card-footer-item-text">{say(meanings.USEFUL)}</div>
              </a>
            <a href="#" className="card-footer-item">
              <div className="card-footer-item-text">{say(meanings.USELESS)}</div>
              </a>
            <a href={get_link(`/${props.title}`)} className="card-footer-item">
              <div className="card-footer-item-text">{say(meanings.MORE_INFO)}</div>
              </a>
          </footer>

        </div>

      </div>
      <style jsx>{`
        .api-title {
          // background-color: red;
          padding-bottom: 10px;
          font-size: 0.6em
        }
        .api-description{
          background-color:rgba(255,0,0, 0.1);
          padding-bottom: 10px;
          font-size: 0.75em;
        }
        .api-spacing {
          padding-top: 30px;
        }
        .api-tags {
          background-color: rgba(255,0,0, 0.2);
          padding-bottom: 5px;
          font-size: 0.75em;
        }

        .card-footer-item-text {
          padding-bottom: 5px;
          font-size: 0.75em;
        }
        .last-update {
          background-color: rgba(255,0,0, 0.3);
          padding-bottom: 5px;
          font-size: 0.75em;
        }
        .api-output-format {
          background-color: rgba(255,0,0, 0.4);
          padding-bottom: 5px;
          font-size: 0.75em;
        }
      `}</style>
    </>
  )
}

export default ApiCard;
