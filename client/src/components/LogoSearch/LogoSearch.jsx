import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './LogoSearch.css'
import Logo from '../../img/logo.png'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <Link to='../home' style={{ textDecoration: 'none' }}>
          {/* <img src={Logo} alt="" /> */}
          <FontAwesomeIcon icon="fa-duotone fa-mug-tea-saucer" style={{"--fa-primary-color": "#ff5900", "--fa-secondary-color": "#ff5900",}} />
          {/* <FontAwesomeIcon icon="fa-solid fa-mug-tea-saucer" style={{color: "#ff5900",}} /> */}
          <div className='logo-name' style={{ textDecoration: 'none' }}>
            TheTea
          </div>
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