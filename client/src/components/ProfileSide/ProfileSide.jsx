import React from 'react'
import { useSelector } from 'react-redux'

import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
// import FollwersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  const { user } = useSelector((state) => state.authReducer.authData)

  return (
    <div>
      <LogoSearch /> 
      <div className='ProfileSide'>
          <ProfileCard location='homepage' user={user} />
          {/* <FollwersCard /> */}
      </div>
    </div>
  )
}

export default ProfileSide