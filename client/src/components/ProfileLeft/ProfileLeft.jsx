import React from 'react'

import '../ProfileLeft/ProfileLeft.css'
// import FollwersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import Sidebar from '../Sidebar/Sidebar'

const ProfileLeft = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar />
        <LogoSearch />
      </div>
      <div className="ProfileSide">
        <InfoCard />
        {/* <FollwersCard /> */}
      </div>
    </div>
  )
}

export default ProfileLeft