import React from 'react'
import { UilSetting } from '@iconscout/react-unicons'

import './RightSide.css'
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import TrendCard from '../TrendCard/TrendCard'

const RightSide = () => {
  return (
    <div className="Rightside">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="button right-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
    </div>
  )
}

export default RightSide