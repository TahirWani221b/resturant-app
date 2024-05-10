import React from 'react'
import classes from './MealsSummary.module.css'

function MealsSummary() {
    return (
        <div className={`${classes['meals-summary']}`}>
            <h1>Delicious Food, Delivered To You</h1>
            <div className={`${classes['meals-description']}`}>
                <p>Choose your favourite meal from our broad selection of available meals and enjoy a delecious lunch or dinner at home.</p>
                <p>All our meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
        </div>
    )
}

export default MealsSummary