import React from 'react'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule } from '@iconscout/react-unicons'

import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="" />
      <div>
          <input type="text" placeholder="What's happening" />
      </div>
      <div className="postOptions">
        <div 
          className="option" 
          style={{ color: "var(--photo)" }}
        >
          <UilScenery />
          Photo
        </div>
        <div className="option" style={{ color: "var(--video)" }}>
          <UilPlayCircle />
          Video
        </div>{" "}
        <div className="option" style={{ color: "var(--location)" }}>
          <UilLocationPoint />
          Location
        </div>{" "}
        <div className="option" style={{ color: "var(--shedule)" }}>
          <UilSchedule />
          Shedule
        </div>
        <button className="button ps-button">Share</button>
      </div>
    </div>
  )
}

export default PostShare