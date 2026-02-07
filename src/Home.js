import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
  <main>
    {posts.length? (
     <Feed posts={posts} />
    ):(
      <p style={{marginTop: "2rem"}}>
        No posts avialable
      </p>
    )}
    
  </main>
  )
}

export default Home