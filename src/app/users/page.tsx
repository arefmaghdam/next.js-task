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
      <div>users</div>
      {usersData.map((item: Users) => (
        <UsersComponent
          id={item.id}
          email={item.email}
          firstName={item.first_name}
          lastName={item.last_name}
          avatar={item.avatar}
        />
      ))}
      <button>update</button>
    </main>
  );
}
