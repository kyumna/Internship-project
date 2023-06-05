
"use client"

import React, { useEffect, useState } from 'react';


export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='bg-pastelPink'>
  
      <h1 className='text-center  text-2xl font-bold pb-2 pt-2 '>Users</h1>
      <div className='flex flex-wrap items-center justify-center h-screen '>
        {users.map((user) => (
          <div className='w-64 h-64 p-2 m-4 border-1 border-gray-300 shadow-xl flex flex-wrap rounded-2xl cursor-pointer hover:transform hover:scale-110 transition-all duration-300' key={user.id}>
            <h2  className="">{user.name}</h2>
            <p className=''>Email: {user.email}</p>
            <p className=''>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

