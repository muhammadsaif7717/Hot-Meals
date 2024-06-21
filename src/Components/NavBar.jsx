import Link from 'next/link';
import React from 'react';

const NavBar = () => {
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
        </div>
    );
};

export default NavBar;