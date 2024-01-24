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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          />
        ))}
      </div>
      <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Update
      </button>
    </main>
  );
}
