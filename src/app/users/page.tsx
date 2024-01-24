"use client";
import AddUser from "@/components/add-user/AddUser";
import UsersComponent from "@/components/usersComponent/UsersComponent";
import getAPI from "@/services/getAPI";

interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default async function Users() {
  const usersData = await getAPI();
  console.log(usersData);

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`User with id ${id} deleted successfully.`);
        getAPI();
      } else {
        console.error("Error deleting user:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting user:");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="mb-8 text-2xl font-bold">Users</div>
      <div className="grid grid-cols-4 gap-4">
        {usersData.map((item: Users) => (
          <UsersComponent
            key={item.id}
            id={item.id}
            email={item.email}
            firstName={item.first_name}
            lastName={item.last_name}
            avatar={item.avatar}
            onDelete={() => handleDeleteUser(item.id)}
          />
        ))}
        <AddUser />
      </div>
      <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Update
      </button>
    </main>
  );
}
