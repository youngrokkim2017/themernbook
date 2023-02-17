import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Posts.css'
import Post from '../Post/Post'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => (
            <Post data={post} id={id}/>
          ))
      }
    </div>
  )
}

export default Posts