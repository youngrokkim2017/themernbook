import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './Posts.css'
import Post from '../Post/Post'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  // const { posts, loading } = useSelector((state) => state.postReducer);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  if (!posts) return "no posts";
  if (params.id) {
    posts = posts.filter((post) => post.userId === params.id)
  }

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