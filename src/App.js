
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';

import { Route, Routes, useNavigate } from 'react-router-dom';


import { useEffect, useState } from 'react';
import { format } from 'date-fns';

function App() {

  const[posts, setPosts] = useState([

    {
      id:1,
      title: "My First Psot",
      datetime: "Jul;y 1 , 2021 auguest 13S",
      body: "This is my first post"
    },
    {
      id:2,
      title: "My Second Psot",
      datetime: "Auguest 1 , 2021 auguest 13S",
      body: "This is My Second Psot"
    },
    {
      id:3,
      title: "My Third Psot",
      datetime: "September 1 , 2021 auguest 13S",
      body: "This is My Third Psot"
    },
    {
      id:4,
      title: "My Fourth Psot",
      datetime: "Oct 1 , 2021 auguest 13S",
      body: "This is My Fourth Psot"
    }





  ])



  const [search, setsearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()


  useEffect(()=> {

    const filterdResult = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    
    setSearchResults(filterdResult.reverse());
     
  }, [posts, search])


  const handleSubmit = (e) => {
   e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1

    const datetime = format(new Date(), 'MMMM dd, yyyy pp')


    const newPost = { id, title: postTitle, datetime, body: postBody}

    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
    
   

  } 


  const handleDelete = (id) => {

    const postList = posts.filter(post => post.id !== id )

    setPosts(postList)
    navigate('/')

  }












  return (
    <div className="App">
     
     
      <Header title = "Ramesh social Media"/>
      <Nav 
      search={search}
      setSearch={setsearch}
      
      />

      <Routes>
          <Route path="/" element= {<Home 
          posts = {searchResults}/>}
        
          />
          <Route path = "post"> 
            <Route index element = {<NewPost 
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          
            />} />
            <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
          </Route>
          < Route path = "about" element={<About /> } />
          < Route path = "*" element={<Missing /> } />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
