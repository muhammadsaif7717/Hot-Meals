'use client'
import axios from 'axios';
import Image from 'next/image';
import React, {  useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');

    const loadData = async () => {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            if (res.data.meals) {
                setMeals(res.data.meals);
            } else {
                setMeals([]);
                setError('No Data Found...')
            }
        } catch (error) {
            console.log("Error fetching meals",error);
            setMeals([]);
            setError('No Data Found...')
        }
    };

    const handler = e => {
        setSearch(e.target.value);
    };



    return (
        <div>
            <div>
                <input
                    onChange={handler}
                    type="text"
                    placeholder='Search....'
                    className='input input-bordered mr-5'
                />
                <button onClick={()=>loadData()} className='btn'>Search</button>
            </div>
            <div className='mt-12 grid grid-cols-3 gap-10 '>
                {meals?.length>0 && !error && meals?.map(meal => (
                    <div key={meal.idMeal} className='card-body border'>
                           <Image
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                        <h6>{meal.strMeal}</h6>
                    </div>
                ))}
                {
                    error && <h1>{error}</h1>
                }
            </div>
        </div>
    );
};

export default Meals;
