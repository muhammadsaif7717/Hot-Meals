'use client'
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const registerPage = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const type = form.type.value;
        const image = form.image.value;
        const newUser = {
            name: name,
            email: email,
            password: password,
            type: type,
            image: image,
        }


        const response = await axios.post('http://localhost:3000/api/auth/signup/new-user', newUser);
        if (response.status === 200) {
            console.log(response.data);
        }

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card  bg-base-100 w-full md:w-96 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className=" input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className=" input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Image" className=" input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Type</span>
                            </label>
                            <select name="type" className='select-text p-3 border rounded-lg'>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className=" input input-bordered" required />
                            <label className="label">
                                <a href="#" className=" label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="'btn btn-primary bg-primary border-none hover:bg-blue-500 rounded-xl py-3">Register</button>
                        </div>
                        <div className='mt-3 text-center'>
                            <span>Already have account? please <Link href={'/login'} className='text-primary font-semibold'>Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default registerPage;