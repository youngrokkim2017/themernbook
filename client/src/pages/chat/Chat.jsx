import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UilSetting } from '@iconscout/react-unicons'

import './Chat.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import { userChats } from '../../api/chatRequest'
import Conversation from '../../components/Conversation/Conversation'
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import ChatBox from '../../components/ChatBox/ChatBox'

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState(null)

  console.log(user)

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id)
        setChats(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }, [user])

  return (
    <div className="Chat">
      {/* left side */}
      <LogoSearch />
      <div className="Chat-container">
        <div className="Left-side-chat">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="Right-side-chat">  
        <div style={{ width: '20rem', alignSelf: 'flex-end' }}>
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
          {/* chat body */}
          <ChatBox chat={currentChat} currentUser={user.id} />
        </div>
      </div>
    </div>
  )
}

export default Chat