import React, { useEffect, useRef, useState } from 'react'
// import { UilSetting } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'

import './RightSide.css'
import Home from "../../img/home.png"
// import Notification from "../../img/noti.png"
import Market from "../../img/market.png"
import Comment from "../../img/comment.png"
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { userChats } from '../../api/chatRequest'
import Conversation from '../Conversation/Conversation'

const RightSide = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [chats, setChats] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const [modalOpened, setModalOpened] = useState(false)
  const socket = useRef()

  // initialize socket
  useEffect(() => {
    socket.current = io('http://localhost:8800')
    socket.current.emit('new-user-add', user._id)
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users)
    })
  }, [user])

  // get chats from db
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id)
        setChats(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }, [user])

  // check online status
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id)
    const online = onlineUsers.find((user) => user.userId === chatMember)
    return online ? true : false 
  }

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to='../home'>
          <img src={Home} alt="" />
        </Link>
        {/* <UilSetting /> */}
        {/* <img src={Notification} alt="" /> */}
        <img src={Market} alt="" />
        <Link to='../chat'>
          <img src={Comment} alt="" />
        </Link>
      </div>
      {/* <TrendCard />
      <button className="button right-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal 
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      /> */}
      <div>
        <div style={{ pointerEvents: 'none' }}>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div>
                <Conversation 
                  data={chat} 
                  currentUserId={user._id} 
                  online={checkOnlineStatus(chat)} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide