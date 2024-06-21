import { Headland_One } from "next/font/google";
import Link from 'next/link';
import { redirect } from "next/navigation";
import React from 'react';

const headland=Headland_One({weight:['400'],subsets:['latin']})

export const metadata = {
    title: "Posts",
    description: "Posts of Hot Meals",
    keywords:["hot meals","meals","your-meals"]
  };

  const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json()
    // if(data){
    // redirect(`/posts/${data[0].id}`)
    // }
    return data;
}

const page = async () => {
    const postdata = await getPosts();
    console.log(postdata)
    return (
        <div className={headland.className}>
            <h6>All Posts</h6>
            <div className='grid grid-cols-3 gap-5'>
                {
                    postdata.slice(0,9).map(post =>
                        <div key={post.id} className='border-2 p-4'>
                            <h1>ID: {post.id}</h1>
                            <h1>Title: {post.title}</h1>
                            <h1>Body: {post.body}</h1>
                            <button className='border p-2 mt-2'>
                                <Link href={`/posts/${post.id}`}>View Details</Link>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default page;