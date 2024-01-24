import React, { FC } from "react";

interface Users {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

const UsersComponent: FC<Users> = (props) => {
  const { id, email, firstName, lastName, avatar } = props;
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
      </div>
    </div>
  );
};

export default UsersComponent;
