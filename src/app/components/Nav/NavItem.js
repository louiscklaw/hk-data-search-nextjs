import React from 'react';
import Link from 'next/link';

import {get_link} from '../../util'

function NavItem({name, to_href}){
  return(
    <Link href={get_link('/')}>
      <a className="navbar-item">
        {name}
      </a>
    </Link>

  )
}

export default NavItem
