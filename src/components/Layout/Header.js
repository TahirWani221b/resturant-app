import React from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    return (
        <>
            <header className={`${classes.header}`}>
                <div className={`${classes.wrapper}`}>
                    <div className={`${classes.logo}`}>ReactMeals</div>
                    <div className={`${classes.yourCart}`} onClick={() => props.setShowCart(!props.showCart)}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <div>Your Cart</div>
                        <div className={`${classes.itemsCounter}`}>0</div>
                    </div>
                </div>
            </header>
            <div className={`${classes['banner-image']}`}>
                <img src='https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='banner' />
            </div>
        </>
    )
}

export default Header