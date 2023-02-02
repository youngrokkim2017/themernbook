import React from 'react'
import { UilSetting } from '@iconscout/react-unicons'

import './RightSide.css'
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"

const RightSide = () => {
  return (
    <div className="Rightside">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>
    </div>
  )
}

export default RightSide