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
    <div>
   
      <h1 className="bg-blue-500 p-4">Posts</h1>
      {users.map((user) => (
        <div key={user.id}>
         
          <p className="bg-blue-500 p-4">Title: {user.title}</p>
          <p>Body: {user.body}</p>
        </div>
      ))}
    </div>
  );
}

