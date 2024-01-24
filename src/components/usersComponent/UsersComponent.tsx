import React, { FC } from "react";

interface Users {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  onDelete: (id: number) => void;
}

const UsersComponent: FC<Users> = (props) => {
  const { id, email, firstName, lastName, avatar, onDelete } = props;
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(id);
        console.log(`user deleted with id: ${id}`);
      } else {
        console.error("error in user delete:", response.statusText);
      }
    } catch (error) {
      console.error("error in user delete");
    }
  };
  return (
    <div className="px-4 py-6 w-300 h-300 bg-white rounded-xl shadow-md space-y-2">
      <div className="w-20 h-20 mx-auto overflow-hidden rounded-full shadow-lg">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">{`${firstName} ${lastName}`}</p>
        <p className="text-gray-500">{email}</p>
        <div className="flex justify-center">
          <button onClick={handleDelete} className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10 border-2 rounded-full "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
