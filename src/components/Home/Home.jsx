/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {
    const [allCourse, setCourse] = useState([])
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setCourse(data))
    }, [])

console.log(allCourse)
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='card-container'>
                   {
                    allCourse.map(course => (
                        <div key={course.Id} className='card'>
                        <div className='card-img'>
                            <img className='photo' src={course.cover} alt="" />
                        </div>
                        <h2 className='title'>{course.title}</h2>
                        <p className='description'><small>{course.description}</small></p>
                        <div className='info'>
                            <p>Price: {course.price}</p>
                            <p>Credit: {course.credit}</p>
                        </div>
                        <button className='card-btn'>Select</button>
                    </div>
                    ))
                   }
                </div>
                <div className='cart'>
                    <h1>rjl</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;