const getAPI = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching user list:", error);
      return null;
    }
  };
  
  export default getAPI;
  