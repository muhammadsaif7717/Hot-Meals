import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { cache: 'no-store' });
    // const res= await fetch('http://localhost:3000/time',{next:{revalidate:5}});
    const data = await res.json();
    return data.currentTime;
}

const page = async () => {
    const currentTime = await getTime()
    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <div>
            <h3>About Hot Meals</h3>
            <h3>Time: {currentTime}</h3>
        </div>
    );
};

export default page;