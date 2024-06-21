import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen px-12 py-24'>
            <h6 className='text-3xl mb-12'>Gallery Page</h6>
            <div className='grid grid-cols-3 gap-5'>
                {
                    [1, 2, 3, 4, 5, 6, 7]?.map(img => 
                        <Image key={img} src={`/images/${img}.jpg`} alt='image' width={1080} height={1920} />
                    )
                }




            </div>
        </div>
    );
};

export default page;