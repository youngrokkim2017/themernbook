import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { UilPen } from "@iconscout/react-unicons";

import './InfoCard.css'
import ProfileModal from '../ProfileModal/ProfileModal';
import * as UserApi from  '../../api/userRequest/js'
import { logout } from '../../actions/AuthAction';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const dispatch = useDispatch()
  const params = useParams()
  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({})
  const { user } = userSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchProfileUser = async() => {
      if (profileUserId === user._id) {
        setProfileUser(user)
      } else {
        const profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)
      }
    }
    fetchProfileUser()
  }, [user])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="InfoCard">
      <div className="InfoHead">
      <h4>Profile Info</h4>
      {user._id === profileUserId ? (
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal 
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      ) : ("")}
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="button logout-button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard