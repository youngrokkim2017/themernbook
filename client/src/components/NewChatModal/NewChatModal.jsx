import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { UilSearch } from '@iconscout/react-unicons';

import { getAllUsers } from "../../api/userRequest";
import { createChat } from "../../api/chatRequest";

function NewChatModal({ modalOpened, setModalOpened, currentUser, chats, setCurrentChat }) {
  const theme = useMantineTheme();
  const [persons, setPersons] = useState([]);
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
    }

    fetchPersons()
  }, [])

  const handleStartChat = (currentUserId, personId) => {
    // try {
    // //   dispatch(createChat([currentUserId, personId]))
    //   dispatch(createChat({
    //     senderId: currentUserId,
    //     receiverId: personId
    //   }))
    // } catch (error) {
    //   console.log(error)  
    // }
    // // dispatch(createChat({
    // //   senderId: currentUserId,
    // //   receiverId: personId
    // // }))
    setModalOpened(false);
  }

  const handleGoToChat = (chat, person) => {
    // setCurrentChat(chat)
    setModalOpened(false);
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
              {chats.map((chat) => {
                if (!chat.members.includes(person._id)) {
                  return (
                    <button 
                      className="button fc-button"
                      onClick={handleStartChat}
                    >
                      New Message
                    </button>
                  )
                } else {
                  return (
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
                  )
                }
              })}
            </div>
          )
        }
      })}
    </Modal>
  );
}

export default NewChatModal;