import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

import './Profile.css'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import { getAllUsers } from '../../api/userRequest'

const Profile = () => {
  // const [urlSearchParams] = useSearchParams()
  // console.log(urlSearchParams.get('id'))
  // const params = new URLSearchParams(window.location.pathname);
  // console.log(params)

  const [urlIdParams] = window.location.href.split('/').slice(-1)
  // console.log(urlIdParams)
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
      // console.log(data)
    }

    fetchPersons()
  }, [])
  
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-Center">
        {/* <ProfileCard location="profilePage" user={urlIdParams} /> */}
        {persons.map((person) => {
          if (person._id === urlIdParams) {
            return <ProfileCard location="profilePage" user={person} />
          }
        })}
        <PostSide />
      </div>
      <RightSide />
    </div>
  )
}

export default Profile