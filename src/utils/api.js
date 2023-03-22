const getUsers = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if(response.status === 200) {
      return await response.json()
    }
  } catch (error) {
    console.log(error);
  }
}
  export {
    getUsers
  }

