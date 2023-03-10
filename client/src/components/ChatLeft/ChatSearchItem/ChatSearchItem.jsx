import React from 'react'

const ChatSearchItem = ({ searchResults, user }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="follower conversation">
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {searchResults.map((person) => {
          if (person._id !== user._id && person.followers.includes(user._id)) {
            return (
              <li>
                <div style={{ display: 'flex' }}>
                  <img src={person.profilePicture ? serverPublic + person.coverPicture : serverPublic + "defaultProfile.png"} alt="" className='followerImage' style={{ width: '50px', height: '50px', paddingRight: '10px' }} />
                  <div className="name" style={{ fontSize: "0.8rem" }}>
                    <span>{person.firstname}</span>
                    <span>{person.username}</span>
                  </div>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default ChatSearchItem