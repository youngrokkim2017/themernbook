import React from 'react'

import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
// import FollwersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div>
      <LogoSearch /> 
      <div className='ProfileSide'>
          <ProfileCard location='homepage' />
          {/* <FollwersCard /> */}
      </div>
    </div>
  )
}

export default ProfileSide