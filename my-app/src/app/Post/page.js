"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
    <Link href="/" className='float-right mr-2 pt-2 font-bold'>See Users</Link>
   
      <h1 className="text-center  text-2xl font-bold pb-2 pt-2 ">Posts</h1>
      {users.map((user) => (
        <div key={user.id} className='w-46 p-2 m-4 border-1 border-gray-300 shadow-xl  rounded-2xl bg-white cursor-pointer hover:transform hover:scale-105 transition-all duration-300'>
         
          <div className='block'><span className='font-bold'>Title</span>: {user.title}</div>
          <div className='block'><span className='font-bold'>Body</span>: {user.body}</div>
        </div>
      ))}
    </div>
  );
}

