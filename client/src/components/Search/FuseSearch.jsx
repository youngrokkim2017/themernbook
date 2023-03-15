import React, { useState } from 'react'
import Fuse from "fuse.js"

import FuseSearchItem from './FuseSearchItem'

const FuseSearch = ({ user, persons, chats, setCurrentChat, setModalOpened }) => {
  const [query, setQuery] = useState('')

  // fuse search
  const options = {
    keys: [
      {
        name: 'firstname',
        weight: 0.5,
      },
      {
        name: 'lastname',
        weight: 0.5
      }
    ],
    includeScore: true,
    isCaseSensitive: false,
    shouldSort: true,
    ignoreLocation: true,
    threshold: 0.3,
  }

  const fuse = new Fuse(persons, options)
  const results = fuse.search(query, { limit: 5 })
  const searchResults = results.length > 0 ? results.map(result => result.item) : persons.slice(0, 5)

  const handleOnSearchChange = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  }

  return (
    <div>
      <div style={{ paddingBottom: '5px' }}>
        <form className='Search'>
          <input
            className="fuse-search"
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleOnSearchChange}
            style={{ width: '100%', border: '2px solid var(--orange)', borderRadius: '0.5rem', padding: '10px 10px' }}
          />
        </form>
      </div>
      {query.length > 2 && results.length > 0 ?
        <div>
          {results.map((result) => (
            <FuseSearchItem searchResults={searchResults} user={user} chats={chats} setCurrentChat={setCurrentChat} setModalOpened={setModalOpened} />
          ))}
        </div>
        : (query.length > 0) || (results.length === 0) ?
          <div>
            {/* No results match your search input */}
          </div>
        : <div>
            {results.map((result) => (
              <FuseSearchItem searchResults={searchResults} user={user} chats={chats} setCurrentChat={setCurrentChat} setModalOpened={setModalOpened} />
            ))}
          </div>
      }
    </div>
  )
}

export default FuseSearch