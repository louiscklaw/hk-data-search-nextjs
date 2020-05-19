import React, {useContext} from 'react';
import {Card, Icon, Content} from 'rbx';
import Link from 'next/link'

import {LangContext} from '../context';

function ApiCard(props){
  let {say, meanings, getCurrentLang} = useContext(LangContext);
  return(
    <>
      <Card style={{
        minHeight: '250px',
        width: "200px",
        margin: "30px"
        }}>
        <Card.Content>
          <div className="api-title">
            {props.title}
          </div>

          <div>{props.description}</div>

          <div>{props.tag}</div>

          <Link href={`${getCurrentLang()}/${props.title}`} >
            <a>Details</a>
          </Link>
          <div>{props.link}</div>

          <div>{say(meanings.MORE_INFO)}</div>
        </Card.Content>
      </Card>
    </>
  )
}

export default ApiCard;
