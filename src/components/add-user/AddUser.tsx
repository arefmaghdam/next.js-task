"use client";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const AddUser: FC = () => {
  return (
    <div
      className="px-4 py-6 w-300 h-300 bg-white rounded-xl shadow-md space-y-2"
    >
      <button className="w-full h-full text-6xl text-gray-500 hover:text-blue-500">
        +
      </button>
    </div>
  );
};

export default AddUser;
