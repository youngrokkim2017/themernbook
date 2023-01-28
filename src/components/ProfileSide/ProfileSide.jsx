import React from 'react'

import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollwersCard from '../FollowersCard/FollwersCard'

const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch />
        <ProfileCard />
        <FollwersCard />
    </div>
  )
}

export default ProfileSide