import React from 'react'

import './FollowersCard.css'
import { Followers } from '../../data/FollowersData'

const FollwersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Your Followers</h3>
        {Followers.map((follower, id) => (
            <div className="follower">
                <div>
                    <img src={follower.img} alt=""  className='followerImg'/>
                    <div className="name">
                        <span>{follower.name}</span>
                        <span>{follower.username}</span>
                    </div>
                </div>
                <button className='button fc-button'>
                    Follow
                </button>
            </div>
        ))}
    </div>
  )
}

export default FollwersCard