
"use client" 
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export default function Home() {
// users will hold the response from api
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // this function will fetchh data from api
    const fetchUsers = async () => {
      try {
        //fetching data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // setting value of "users" to fetched data
        setUsers(data);
      } catch (error) {
        //if error occurs in fetching this block will be executed
        console.log('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    //rendering the fetched data on screen
    <div className='bg-pastelPink'>
    <Link href="/Post" className='float-right mr-2 pt-2 font-bold'>See Posts</Link>
      <h1 className='text-center  text-2xl font-bold pb-2 pt-2 '>Users</h1>
      <div className='flex flex-wrap items-center justify-center h-screen '>
        {users.map((user) => (
          <div className='w-64 h-64 p-2 m-4 border-1 border-gray-300 shadow-xl flex flex-wrap rounded-2xl cursor-pointer hover:transform hover:scale-110 transition-all duration-300' key={user.id}>
            <h2  className="">{user.name}</h2>
            <p className=''><span className='font-bold'>Email</span>: {user.email}</p>
            <p className=''><span className='font-bold'>Phone</span>: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

