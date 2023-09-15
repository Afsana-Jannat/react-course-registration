/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import "./Cart.css"

const Cart = ({ selectedCourses }) => {
    console.log(selectedCourses)
    return (
        <div>
            <h2>Course Registration</h2>
            {
                selectedCourses.map((course) =>(
                    <li>{course.title}</li>
                ))
            }
        </div>
    );
};

export default Cart;