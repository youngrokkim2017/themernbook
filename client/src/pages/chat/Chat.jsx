import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UilSetting } from '@iconscout/react-unicons'
import { io } from 'socket.io-client'

import './Chat.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import { userChats } from '../../api/chatRequest'
import Conversation from '../../components/Conversation/Conversation'
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import ChatBox from '../../components/ChatBox/ChatBox'
import NewChatModal from '../../components/NewChatModal/NewChatModal'

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)
  const [modalOpened, setModalOpened] = useState(false)
  const socket = useRef()

  
  // initialize socket
  useEffect(() => {
    socket.current = io('http://localhost:8800')
    socket.current.emit('new-user-add', user._id)
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users)
      console.log(onlineUsers)
    })
  }, [user])

  // send message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])

  // receive message from socket server
  useEffect(() => {
    socket.current.on('receive-message', (data) => {
      setReceiveMessage(data)
    })
  }, [])

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

  // check online status
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id)
    const online = onlineUsers.find((user) => user.userId === chatMember)
    return online ? true : false 
  }

  // const handleCreateChat = () => {

  // }

  return (
    <div className="Chat">
      {/* left side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Chats</h2>
            {/* <button 
              className="create-chat button"
              // onClick={handleCreateChat}
              onClick={() => setModalOpened(true)}
              style={{ 
                height: '30px',
                width: '30px',
                cursor: 'pointer',
                marginTop: '15px',
              }}
            >
              +
            </button>
            <NewChatModal 
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              currentUser={user}
              chats={chats}
              setCurrentChat={setCurrentChat}
            /> */}
          </div>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
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
        </div>
          {/* chat body */}
          <ChatBox 
            chat={currentChat} 
            currentUser={user._id} 
            setSendMessage={setSendMessage} 
            receiveMessage={receiveMessage} 
          />
      </div>
    </div>
  )
}

export default Chat