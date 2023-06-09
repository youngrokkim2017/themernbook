import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './FollowersCard.css'
import User from '../User/User'
import { getAllUsers } from '../../api/userRequest'

const FollwersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
      // console.log(data)
    }

    fetchPersons()
  }, [])

  return (
    <div className="FollowersCard">
      <h3>Suggested followers</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          // return <User person={person} key={id} />
          return <User person={person} key={id} location='homepage' />
        }
      })}
    </div>
  )
}

export default FollwersCard