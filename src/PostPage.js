import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'>
      <article className='Post'>
       {post && 

       <>
        <Link to={`post/${post.id}`}>
               <h2>{post.title}</h2>
               <p className=''>{post.datetime}</p>
            </Link>
        <p className='postBody'>{post.body}</p>
        <button onClick={() => handleDelete(post.id)}>Delete Post</button>
       </>
      } 
      {!post &&

      <>
        <h2>Post Not Found</h2>
        <p>Well, thats dissapointing </p>

        <p>Please visit our Home Page</p>
      </>

      }





      </article>
     

    </main>
  )
}

export default PostPage