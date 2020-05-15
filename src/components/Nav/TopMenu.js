import React from 'react';

import {Link, NavLink} from 'react-router-dom'

function TopMenu(){
  return(
    <ul>
      <li>
        <Link to="/">主頁</Link>
      </li>
      <li>
        <Link to="/stat">統計</Link>
      </li>
      <li>
        <Link to="/about">關於我</Link>
      </li>
    </ul>
  )
}

export default TopMenu;