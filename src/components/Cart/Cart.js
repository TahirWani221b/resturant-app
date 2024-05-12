import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Context/Cart/CartContext'

function Cart(props) {
    const { cartInfo, handleQuantityChange } = useContext(CartContext);
    const cartItems = <ul className={classes['cart-items']}>{cartInfo.itemsInfo.map((item) => (
        <li key={item.id}>
            <div>
                {item.name}
                <div className={`${classes['item-details']}`}>
                    <span className={`${classes['item-price']}`}>${item.price}</span>
                    <span className={`${classes['item-quantity']}`}>x {item.amount}</span>
                </div>
            </div>
            <div className={`${classes['item-quantity-change']}`}>
                <button onClick={() => handleQuantityChange(item.id, 1, 'decrement')}>-</button>
                <button onClick={() => handleQuantityChange(item.id, 1, 'increment')}>+</button>
            </div>

        </li>
    ))}</ul>
    return (
        <Modal showCart={props.showCart} setShowCart={props.setShowCart}>
            {cartInfo.totalProducts ? (
                <>
                    {cartItems}
                    <div className={`${classes.total}`}>
                        <span>Total Amount</span>
                        <span>${cartInfo.totalAmount.toString()}</span>
                    </div>
                </>
            ) : (
                <div>There is nothing in your Cart!</div>
            )}
            <div className={`${classes.actions}`}>
                <button className={`${classes['button--alt']}`} onClick={() => props.setShowCart(false)}>Close</button>
                {cartInfo.totalProducts ? <button className={`${classes.button}`}>Order</button> : null}
            </div>
        </Modal>
    );
}

export default Cart