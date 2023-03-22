import React, {useState, useEffect} from 'react'
import Main from '../../components/Main';
import Spinner from '../../components/Spinner';
import { getUsers } from '../../utils/api';
import './style.css';

const Dashboard = () => {


  const [user,setUser] = useState(null);
 
  const getAllUsers = async () => {
    let data = await getUsers();
    if(data instanceof Error) {
      console.log(data);
    } else {
      setUser(data);
      console.log(data.results[0]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAllUsers();
    },2)
  },[]);

  return (
    <Main>
      <div className='container'>
        <div className='top-containers'>
          <div className='left'>{
            user ?  
              <div>{user.results[0].email}</div>
             : <Spinner style={{backgroundColor: 'red'}}></Spinner>
          }
          </div>
          <div className="right">
              {
                user ?  
                <img src={`${user.results[0].picture.large}`} alt='user' />
               : <Spinner style={{backgroundColor: 'red'}}></Spinner>
              }
          </div>
        </div>
        <div className='main-container'>
            {
              user ? 
              <div className='user-container'> 
                <h2>{user.results[0].name.title} {user.results[0].name.first} {user.results[0].name.last}</h2>
                <p>Email: {user.results[0].email}</p>
                <p>Phone: {user.results[0].phone}</p>
                <p>Gender: {user.results[0].gender}</p>
                <p>Age: {user.results[0].dob.age}</p>
                <p>Location: {user.results[0].location.city}, {user.results[0].location.state}, {user.results[0].location.country}</p>
              </div> : <Spinner style={{backgroundColor: 'red'}}></Spinner>
            }
        </div>
      </div>
    </Main>
  )
}

export default Dashboard;