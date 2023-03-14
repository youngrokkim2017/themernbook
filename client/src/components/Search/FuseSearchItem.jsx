import React from 'react'

const FuseSearchItem = ({ searchResults, user, chats, setCurrentChat, setModalOpened }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const dispatch = useDispatch();
  const [currentChatData, setCurrentChatData] = useState(null);

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
    <div>
      <div>
        {searchResults.map((person) => {
          if (person._id !== user._id && person.followers.includes(user._id)) {
            return (
              <div>
                <div onClick={() => {!ifChatExists(person._id) ? handleStartChat(person._id) : handleGoToChat()}}>
                  <img src={person.profilePicture ? serverPublic + person.coverPicture : serverPublic + "defaultProfile.png"} alt="" className='followerImage' style={{ width: '50px', height: '50px' }} />
                  <div className="name" style={{ fontSize: "0.8rem" }}>
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
      </div>
    </div>
  )
}

export default FuseSearchItem