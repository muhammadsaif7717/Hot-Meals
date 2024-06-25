import React from 'react';

// export const metadata = {
//     title: "Details",
//     description: "Details of specific meals",
//     keywords:["hot meals","meals","your-meals"]
//   };

export const generateMetadata = async ({ params }) => {
    const res = (await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`))
    const postDetails = await res.json()
    return {
        title: `${postDetails.title}`,
        description: `${postDetails.body}`,
        keywords: postDetails.body.split(' '),
    }
}

const getPostDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}

const page = async ({ params }) => {
    const { title, body } = await getPostDetails(params.id)
    return (
        <div>
            <h1>title: {title}</h1>
            <h1>Body: {body}</h1>
        </div>
    );
};

export default page;


export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

    return posts?.slice(0, 10)?.map((post) => ({
        id: post.id.toString()
    }))
}
