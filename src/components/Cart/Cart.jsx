/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import "./Cart.css"

const Cart = ({ selectedCourses, remaining, totalCredit, totalPrice }) => {
    console.log(selectedCourses)
    return (
        <div className='selected-crs'>
            <h2 className='remaining'>Credit Hour Remaining: {remaining} <small>hr</small></h2>
            <hr />
            <h2 className='course'>Course Registration</h2> 
            {
                selectedCourses.map((course) =>(
                    <li key={course.Id}>{course.title}</li>
                ))
            }
            <hr />
            <h3 className='totalcredit'>Total Credit Hour: {totalCredit}</h3>
            <hr />
            <h3>Total Price: {totalPrice} USD</h3>
            
        </div>
    );
};

export default Cart;