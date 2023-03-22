import React, { useState } from 'react'
import './style.css'


const Post = ({title,body}) => {

  const [showBody, setShowBody] = useState(false);

  const handleClick = () => {
    setShowBody(!showBody);
  };

  return (
    <div className='card'>
        <h1 className={`${showBody ? 'hide' : ''}`}>{title}</h1>
        
        {showBody ? <p className={`${showBody ? 'show' : ''}`}>{body}</p> : null}
        <button onClick={handleClick}>{showBody ? 'Read less':'Read more'}</button>
    </div>
  )
}

export default Post;