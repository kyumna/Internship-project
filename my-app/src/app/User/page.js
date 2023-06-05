"use client"
import Link from 'next/link';
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
    <div>
    
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

