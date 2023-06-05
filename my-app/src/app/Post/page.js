"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export default function Home() {
// posts will hold the response from api
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     // this function will fetchh data from api
    const fetchUsers = async () => {
      try {
         //fetching data
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // setting value of "posts" to fetched data
        setPosts(data);
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
    <Link href="/" className='float-right mr-2 pt-2 font-bold'>See Users</Link>
   
      <h1 className="text-center  text-2xl font-bold pb-2 pt-2 ">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} data-testid="post" className='w-46 p-2 m-4 border-1 border-gray-300 shadow-xl  rounded-2xl bg-white cursor-pointer hover:transform hover:scale-105 transition-all duration-300'>
         
          <div className='block'><span className='font-bold'>Title</span>: {post.title}</div>
          <div className='block'><span className='font-bold'>Body</span>: {post.body}</div>
        </div>
      ))}
    </div>
  );
}

