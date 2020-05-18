import React, {useContext} from 'react';
import {Card, Icon, Content} from 'rbx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import {LangContext} from '../context';

function ApiCard(props){
  let {say, meanings} = useContext(LangContext);
  return(
    <>
      <Card style={{
        minHeight: '300px',
        width: "300px",

        margin: "30px"
        }}>
        <Card.Content>
          <div className="api-name">
            {props.title}
          </div>

          <div>{props.description}</div>
          <div>{props.tag}</div>
          <div>{props.link}</div>

      <div>{say('zh',meanings.MORE_INFO)}</div>
        </Card.Content>
      </Card>
    </>
  )
}

export default ApiCard;
