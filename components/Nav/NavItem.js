import React, {useContext} from 'react';
import Link from 'next/link';

import {Navbar} from 'rbx';

function NavItem(props){
  return(
    <Link href={props.href} as={props.as}>
      <Navbar.Item>{props.text}</Navbar.Item>
    </Link>
  )
}

export default NavItem
