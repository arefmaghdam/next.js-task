interface IdProps {
  id: number;
}

const getUserAPI = async ({ id }: IdProps) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching user list:", error);
    return null;
  }
};

export default getUserAPI;
