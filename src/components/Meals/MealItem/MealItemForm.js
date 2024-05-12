import React, { useContext, useState } from 'react'
import classes from './MealItemFrom.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../Context/Cart/CartContext'

function MealItemForm({ itemData }) {
    const { cartInfo, handleQuantityChange } = useContext(CartContext);
    const [amount, setAmount] = useState(1);
    return (
        <form className={`${classes.form}`} >
            <Input label="Amount" input={{ type: 'number', id: 'amount', min: 1, max: 5, step: 1, value: amount, onChange: (event) => { setAmount(event.target.value) } }} />
            <button onClick={(event) => { event.preventDefault(); handleQuantityChange(itemData.id, amount, 'addNew', itemData); }}>+ Add</button>
        </form >
    )
}

export default MealItemForm