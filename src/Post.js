import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post, setPosts}) => {

  return (
    <article className='post'>
       <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className=''>{post.datetime}</p>
       </Link>
       <p className=''>{post.body}</p>
    </article>
  )
   
}

export default Post