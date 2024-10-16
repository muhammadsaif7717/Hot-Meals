'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const session = useSession();
    console.log(session)
    return (
        <div className='flex justify-between bg-orange-400 p-5'>
            <h1>Hot Meals</h1>
            <ul className='flex  gap-5'>
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/posts`}>Posts</Link></li>
                <li><Link href={`/meals`}>Meals</Link></li>
                <li><Link href={`/gallery`}>Gallery</Link></li>
                <li><Link href={`/time`}>Time</Link></li>
                <li><Link href={`/about
                    `}>About</Link></li>
            </ul>
            <div className='flex gap-5'>
                <div>
                    <h1>{session?.data?.user?.name}</h1>
                    <h1>{session?.data?.user?.type}</h1>
                </div>
                <div>
                    {session && <Image src={session?.data?.user?.image} alt='' height={40} width={40} className='rounded-full h-10 w-10' />}
                </div>
                <div>
                    <Link href={'/api/authsignup'} className='btn btn-primary mr-4'>Sign Up</Link>
                    {
                        session.status === 'authenticated' ?
                            <button onClick={() => signOut()} className='btn btn-primary'>Log Out</button>
                            :
                            <Link href={'/api/auth/signin'} className='btn btn-primary'>Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;