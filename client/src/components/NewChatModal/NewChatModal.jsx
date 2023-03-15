import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { UilSearch } from '@iconscout/react-unicons';

import { getAllUsers } from "../../api/userRequest";
import { createChat, findChat } from "../../api/chatRequest";
import FuseSearch from "../Search/FuseSearch";

function NewChatModal({ modalOpened, setModalOpened, currentUser, chats, setCurrentChat }) {
  const theme = useMantineTheme();
  const [persons, setPersons] = useState([]);
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

    const handleStartChat = (personId) => {
    try {
      setCurrentChatData(dispatch(createChat({
        senderId: currentUser._id,
        receiverId: personId
      })))
    } catch (error) {
      console.log(error)
    }

    setCurrentChat(currentChatData)
    setModalOpened(false);
  }

  const handleGoToChat = () => {
    setCurrentChat(currentChatData)
    setModalOpened(false);
  }

  const ifChatExists = (personId) => {
    let chatFlag = false
    for (let i = 0; i < chats.length; i++) {
      let chat = chats[i]
      if (chat.members.includes(personId)) {
        chatFlag = true
      }
    }
    return chatFlag
  }

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
      <FuseSearch 
        user={currentUser} 
        persons={persons} 
        chats={chats}
        setCurrentChat={setCurrentChat}
        setModalOpened={setModalOpened}
      />
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
              {!ifChatExists(person._id) ? (
                <button 
                  className="button fc-button"
                  onClick={() => {
                    handleStartChat(person._id)
                  }}
                >
                  New Message
                </button>
              ) : (
                <button 
                  className="button fc-button"
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
            </div>
          )
        }
      })}
    </Modal>
  );
}

export default NewChatModal;