import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './ProfileCard.css'

// const ProfileCard = ({ location }) => {
const ProfileCard = ({ location, user }) => {
  // const { user } = useSelector((state) => state.authReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpeg"} alt="" />
        <img src={user.profilePicture ? serverPublic + user.coverPicture : serverPublic + "defaultProfile.png"} alt="" />
      </div>
      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : ""}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === 'profilePage' 
        ? '' 
        : <span>
            <Link 
              to={`/profile/${user._id}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              My Profile
            </Link>
          </span>
      }
    </div>
  )
}

export default ProfileCard