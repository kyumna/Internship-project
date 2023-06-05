"use client"
import Link from 'next/link';
import background from '../images/background.jpg'

export default function Home() {


  return (
    <div className=''>
    
    <Link href='/User'>Back to home</Link>
    <Link href='/Post'>Back to home</Link>
     
    </div>
  );
}

