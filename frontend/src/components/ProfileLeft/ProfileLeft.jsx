import React from 'react'

import FollwersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollwersCard />
    </div>
  )
}

export default ProfileLeft