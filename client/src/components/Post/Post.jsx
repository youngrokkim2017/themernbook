import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { likePost } from '../../api/postRequest'
import { deletePost } from '../../actions/postAction'
// import { likePost } from '../../actions/postAction'

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const dispatch = useDispatch();

  const handleLike = () => {
    setLiked((prev) => !prev)
    likePost(data._id, user._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }

  const handleDelete = (post) => {
    // e.preventDefault();
    
    dispatch(deletePost(post))
  }

  return (
    <div className="Post">
        <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
        <div className="postReact">
            {user._id === data.userId && (
                <FontAwesomeIcon icon="fa-solid fa-trash-can" style={{ cursor: 'pointer', color: "#ff7700" }} onClick={handleDelete} />
            )}
            {/* <img src={Share} alt="" /> */}
            <img src={Comment} alt="" />
            <img src={liked ? Heart : NotLike} alt="" style={{ cursor: 'pointer' }} onClick={handleLike} />
        </div>
        <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post