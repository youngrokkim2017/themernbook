import React from 'react'

// import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
// import FollwersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <ProfileCard location='homepage' />
        {/* <FollwersCard /> */}
    </div>
  )
}

export default ProfileSide