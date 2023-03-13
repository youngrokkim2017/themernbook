import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { UilSearch } from '@iconscout/react-unicons';

import { getAllUsers } from "../../api/userRequest";
import { createChat, findChat } from "../../api/chatRequest";

function NewChatModal({ modalOpened, setModalOpened, currentUser, chats, setCurrentChat }) {
// function NewChatModal({ modalOpened, setModalOpened, currentUser, chat, setCurrentChat }) {
// function NewChatModal({ modalOpened, setModalOpened, currentUser, chat, setCurrentChat, person }) {
  const theme = useMantineTheme();
  const [persons, setPersons] = useState([]);
  // const [newChatData, setNewChatData] = useState('');
  // const [chatFlag, setChatFlag] = useState(false);
  // const [newChat, setNewChat] = useState(null);
  // const [newCurrentChat, setNewCurrentChat] = useState(null);
  const [currentChatData, setCurrentChatData] = useState(null);
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
    }

    fetchPersons()
  }, [])

  // const handleStartChat = (currentUserId, personId) => {
  // const handleStartChat = () => {
    const handleStartChat = (personId) => {
    // const handleStartChat = (personId, currentChat) => {
    // try {
    // //   dispatch(createChat([currentUserId, personId]))
    //   dispatch(createChat({
    //     senderId: currentUser._id,
    //     receiverId: newChatData
    //   }))
    // } catch (error) {
    //   console.log(error)  
    // }

    // dispatch(createChat({
    //   senderId: currentUser._id,
    //   receiverId: newChatData
    // }))

    // const newChat = {
    //   members: [
    //     currentUser._id, newChatData
    //   ]
    // }
    // dispatch(createChat({
    //   members: [currentUser._id, newChatData]
    // }))

    // const newChat = {
    //   members: [
    //     currentUser._id, newChatData
    //   ]
    // }

    // let currentChatData
    try {
      // dispatch(createChat(newChat))
      // dispatch(createChat({
      //   senderId: currentUser._id,
      //   receiverId: personId
      // }))
      // currentChatData = dispatch(createChat({
      //   senderId: currentUser._id,
      //   receiverId: personId
      // }))
      setCurrentChatData(dispatch(createChat({
        senderId: currentUser._id,
        receiverId: personId
      })))
    } catch (error) {
      console.log(error)
    }

    // try {
    //   dispatch(createChat(currentUser._id, newChatData))
    // } catch (error) {
    //   console.log(error)
    // }
    // setCurrentChat(chat)
    // setCurrentChat(currentChat)
    setCurrentChat(currentChatData)
    setModalOpened(false);
  }

  // const handleGoToChat = (currentChat) => {
  const handleGoToChat = () => {
    // setCurrentChat(chat)
    // setCurrentChat(currentChat)
    setCurrentChat(currentChatData)
    setModalOpened(false);
  }

  // const handleChat = (personId, currentChat) => {
  //   try {
  //     dispatch(findChat(currentUser._id, personId))
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   setCurrentChat(currentChat)
  //   setModalOpened(false)
  // }

  const ifChatExists = (personId) => {
    let chatFlag = false
    for (let i = 0; i < chats.length; i++) {
      let chat = chats[i]
      if (chat.members.includes(personId)) {
        // setChatFlag(true)
        chatFlag = true
      }
    }
    // setChatFlag(false)
    return chatFlag
  }

  // const handleChatData = (personId) => {
  //   // let chatFlag = false;
  //   // let newCurrentChat;
  //   // let newChat;
  //   let chatData;
  //   for (let i = 0; i < chats.length; i++) {
  //     let chat = chats[i]
  //     if (chat.members.includes(personId)) {
  //       setChatFlag(true)
  //       chatData = setNewCurrentChat(chat)
  //       return chatData
  //     }
  //   }
  //   setChatFlag(false)

  //   if (!chatFlag) {
  //     chatData = setNewChat({
  //       senderId: currentUser._id,
  //       receiverId: personId
  //     })
  //   }

  //   return chatData
  // }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="30%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      {/* <div className="Search">
        <input type="text" placeholder="Search for friends" style={{ width: '100%', marginBottom: '15px' }} />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div> */}
      {persons.map((person, id) => {
        if (person._id !== currentUser._id && person.followers.includes(currentUser._id)) {
          return (
            <div className="follower" style={{ marginBottom: '15px' }}>
              <div>
                <img src={person.profilePicture ? serverPublic + person.coverPicture : serverPublic + "defaultProfile.png"} alt="" className='followerImage'/>
                <div className="name">
                  <span>{person.firstname}</span>
                  <span>{person.username}</span>
                </div>
              </div>
        {/* {person._id !== currentUser._id && person.followers.includes(currentUser._id) && (
          <div className="follower" style={{ marginBottom: '15px' }}>
            <div>
              <img src={person.profilePicture ? serverPublic + person.coverPicture : serverPublic + "defaultProfile.png"} alt="" className='followerImage'/>
              <div className="name">
                <span>{person.firstname}</span>
                <span>{person.username}</span>
              </div>
            </div> */}
              {/* {chats.map((chat) => {
                if (!chat.members.includes(person._id)) {
                  return (
                    <button 
                      className="button fc-button"
                      onClick={() => {
                        // handleStartChat(person._id)
                        handleStartChat(person._id, chat)
                      }}
                    >
                      New Message
                    </button>
                  )
                } else {
                  return (
                    <button 
                      className="button fc-button"
                      // onClick={handleGoToChat}
                      onClick={() => handleGoToChat(chat)}
                      style={{
                        color: 'var(--orange)',
                        border: '2px solid var(--orange)',
                        cursor: 'pointer',
                        background: 'transparent',
                      }}
                    >
                      Go to Conversation
                    </button>
                  )
                }
              })} */}
              {!ifChatExists(person._id) ? (
                <button 
                  className="button fc-button"
                  onClick={() => {
                    // handleStartChat(person._id)
                    // handleStartChat(person._id, chat)
                    handleStartChat(person._id)
                  }}
                >
                  New Message
                </button>
              ) : (
                <button 
                  className="button fc-button"
                  // onClick={handleGoToChat}
                  // onClick={() => handleGoToChat(chat)}
                  // onClick={() => handleChatData(person._id)}
                  onClick={() => handleGoToChat()}
                  style={{
                    color: 'var(--orange)',
                    border: '2px solid var(--orange)',
                    cursor: 'pointer',
                    background: 'transparent',
                  }}
                >
                  Go to Conversation
                </button>
              )}
              {/* {!chat.members.includes(person._id) ? (
                <button 
                  className="button fc-button"
                  // onClick={() => {
                  //   setNewChatData(person._id);
                  //   handleStartChat;
                  // }}
                  onClick={() => {
                    handleStartChat(person._id)
                  }}
                >
                  New Message
                </button>
              ) : (
                <button 
                  className="button fc-button"
                  onClick={handleGoToChat}
                  style={{
                    color: 'var(--orange)',
                    border: '2px solid var(--orange)',
                    cursor: 'pointer',
                    background: 'transparent',
                  }}
                >
                  Go to Conversation
                </button>
              )} */}
            </div>
          )
        }
      })}
    </Modal>
  );
}

export default NewChatModal;