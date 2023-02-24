import React, { useState } from 'react'
import { UilSetting } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

import './RightSide.css'
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to='../home'>
          <img src={Home} alt="" />
        </Link>
        <UilSetting />
        <img src={Notification} alt="" />
        <Link to='../chat'>
          <img src={Comment} alt="" />
        </Link>
      </div>
      <TrendCard />
      <button className="button right-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal 
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  )
}

export default RightSide