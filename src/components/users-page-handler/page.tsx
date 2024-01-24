"use client"

import { useRouter } from "next/navigation";

export default function UsersPageHandler() {
  const router = useRouter();
  const usersPageHandler = () => {
    router.push("/users");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={usersPageHandler}>
        Welcome to Techsnovel Next.js Task
      </button>
    </div>
  );
}
