import React from 'react'

import '../ProfileLeft/ProfileLeft.css'
// import FollwersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div>
      <LogoSearch />
      <div className="ProfileSide">
        <InfoCard />
        {/* <FollwersCard /> */}
      </div>
    </div>
  )
}

export default ProfileLeft