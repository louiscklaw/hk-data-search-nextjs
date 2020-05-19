import React, {useContext} from 'react';
// import {Card, Icon, Content} from 'rbx';
import Link from 'next/link'

import {LangContext} from '../context';
import {get_link} from '../util';

function ApiCard(props){
  let {say, meanings, getCurrentLang} = useContext(LangContext);
  return(
    <>
      <Card style={{
        minHeight: '250px',
        width: "250px",
        margin: "30px"
        }}>
        <Card.Content>
          <div className="api-title">
            {props.title}
          </div>

          <div className="api-description">
            {props.description}
          </div>

          <div className="api-tags">
            tags: {props.tag}
          </div>

          <Link href={get_link(`/${props.title}`)} >
            <a className="api-more-info">{say(meanings.MORE_INFO)}</a>
          </Link>

        </Card.Content>
        <style jsx>{`
          .api-title {
            background-color: red;
            font-size: 0.6em
          }
          .api-description{
            background-color: gold;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 0.8em;
          }
          .api-tags {
            background-color: green;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .api-more-info {
            background-color: pink;
            font-weight: bold;
          }
        `}</style>
      </Card>
    </>
  )
}

export default ApiCard;
