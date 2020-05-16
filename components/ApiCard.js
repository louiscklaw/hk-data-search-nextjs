import React from 'react';
import {Card, Icon, FontAwesomeIcon} from 'rbx';

function ApiCard(){
  return(
    <Card>
      <Card.Header>
        <Card.Header.Title>Component</Card.Header.Title>
        <Card.Header.Icon as="a">
          <Icon>
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
        </Card.Header.Icon>
      </Card.Header>
    </Card>
  )
}

export default ApiCard;
