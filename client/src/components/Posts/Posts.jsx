import React, { useEffect, useState } from 'react'
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
  // const [postData, setPostData] = useState([]);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  // useEffect(() => {
  //   const getPostsData = async () => {
  //     try {
  //       const { data } = await getTimelinePosts(user._id)
  //       console.log(data)
  //       setPostData(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }, [postData])

  if (!posts) return "no posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id)

  console.log(posts)
  // console.log(postData)

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