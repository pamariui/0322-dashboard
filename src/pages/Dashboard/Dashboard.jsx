import React, {useState, useEffect} from 'react'
import Main from '../../components/Main';
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';
import { getPost } from '../../utils/api';
import './style.css';

const Dashboard = () => {

  const [posts, setPost] = useState(null);

  const getAllPosts = async () => {
    let data = await getPost();
    if(data instanceof Error) {
      console.log(data);
    } else {
      setPost(data);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAllPosts();
    },5000)
  },[]);

  return (
    <Main>
      <div className='container'>
        <div className='top-containers'>
          <div className='left'>
            a
          </div>
          <div className="right">
              b
          </div>
        </div>
        <div className='main-container'>
            {
              posts ? posts.map(post => (
                <Post key={post.id} title={post.title} body={post.body}/>
              )) : <Spinner style={{backgroundColor: 'red'}}></Spinner>
            }
        </div>
      </div>
    </Main>
  )
}

export default Dashboard