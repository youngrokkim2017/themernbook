import React from 'react'
import { useSelector } from 'react-redux'

import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import Sidebar from '../Sidebar/Sidebar'
// import FollwersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  const { user } = useSelector((state) => state.authReducer.authData)

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar />
        <LogoSearch /> 
      </div>
      <div className='ProfileSide'>
          <ProfileCard location='homepage' user={user} />
          {/* <FollwersCard /> */}
      </div>
    </div>
  )
}

export default ProfileSide