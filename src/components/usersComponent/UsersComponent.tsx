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
    <div>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <img src={avatar} alt="User Avatar" />
    </div>
  );
};

export default UsersComponent;
