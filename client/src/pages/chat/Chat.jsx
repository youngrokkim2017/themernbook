import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './Chat.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import { userChats } from '../../api/chatRequest'
import Conversation from '../../components/Conversation/Conversation'

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [chats, useChats] = useState([])

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
              <div>
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="Right-side-chat">  
        
      </div>
    </div>
  )
}

export default Chat