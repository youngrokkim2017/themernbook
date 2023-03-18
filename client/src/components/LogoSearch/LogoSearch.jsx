import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

import './LogoSearch.css'
import Logo from '../../img/logo.png'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <Link to='../home'>
          <img src={Logo} alt="" />
        </Link>
        {/* <div className="Search">
            <input type="text" placeholder="#Explore" />
            <div className="s-icon">
                <UilSearch />
            </div>
        </div> */}
    </div>
  )
}

export default LogoSearch