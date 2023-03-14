import React, { useState } from 'react'
import Fuse from "fuse.js"

import { getAllUsers } from '../../api/userRequest'
import ChatSearchItem from '../ChatLeft/ChatSearchItem/ChatSearchItem'

const FuseSearch = ({ user, persons }) => {
//   const [persons, setPersons] = useState([])
  const [query, setQuery] = useState('')

  // fuse search
//   useEffect(() => {
//     const fetchPersons = async () => {
//       const { data } = await getAllUsers();
//       setPersons(data);
//     }

//     fetchPersons()
//   }, [])

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
      <div>
        <form>
          <input
            className="bg-transparent border-none w-full text-black placeholder-gray-600 focus:outline-none ml-2 sans-serif"
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleOnSearchChange}
          />
        </form>
      </div>
      {query.length > 2 && results.length > 0 ?
        <div>
          {results.map((result) => (
            // results is a nested array, result is an object, result.item is an object w/ user details
            <ChatSearchItem searchResults={searchResults} user={user} />
          ))}
        </div>
        : (query.length > 0) || (results.length === 0) ?
          <div>
            No results match your search input
          </div>
        : <div>
            {results.map((result) => (
              // results is a nested array, result is an object, result.item is an object w/ user details
              <ChatSearchItem searchResults={searchResults} user={user} />
            ))}
          </div>
      }
    </div>
  )
}

export default FuseSearch