const getPost = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(response.status === 200) {
        return await response.json()
      }
    } catch (error) {
      console.log(error);
    }
  };

  export {
    getPost
  }