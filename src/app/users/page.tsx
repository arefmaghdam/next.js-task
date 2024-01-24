import getAPI from "@/services/getAPI";

export default async function Users() {
  const usersData = await getAPI();
  console.log(usersData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>users</div>
      <button>update</button>
    </main>
  );
}
