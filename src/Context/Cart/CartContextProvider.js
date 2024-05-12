import React, { useState } from 'react'
import CartContext from './CartContext'

function CartContextProvider(props) {
    const [cartInfo, setCartInfo] = useState({
        totalProducts: 0,
        itemsInfo: [],
        totalAmount: 0
    });

    const handleQuantityChange = (id, quantity, type = "increment", data = null) => {
        quantity = parseInt(quantity);
        if (isNaN(quantity)) {
            quantity = 1;
        }

        if (type === "addNew" && data !== null) {
            const checkForExisteditem = cartInfo.itemsInfo.find(item => item.id === id);
            if (checkForExisteditem !== undefined) {
                var newItemInfo = cartInfo.itemsInfo.map((item) => (
                    item.id === id ? { ...item, amount: parseInt(item.amount) + quantity } : item
                ));
            } else {
                var newItemInfo = [...cartInfo.itemsInfo, { id: data.id, name: data.name, amount: quantity, price: data.price }];
            }
        } else {
            var newItemInfo = cartInfo.itemsInfo.map((item) => (
                item.id === id && type === "increment" ? { ...item, amount: parseInt(item.amount) + quantity } :
                    item.id === id && type === "decrement" && parseInt(item.amount) - quantity > 0 ? { ...item, amount: parseInt(item.amount) - quantity } : item.id === id && type === "decrement" && parseInt(item.amount) - quantity <= 0 ? null : item
            )).filter(item => item !== null);
        }

        const newTotalAmount = newItemInfo.length ? newItemInfo.reduce((total, item) => {
            return total + (item.price * parseInt(item.amount));
        }, 0) : 0;

        const newTotalProducts = newItemInfo.length ? newItemInfo.reduce((total, item) => {
            return total + parseInt(item.amount);
        }, 0) : 0;

        setCartInfo(prev => ({
            totalAmount: newTotalAmount.toFixed(2),
            totalProducts: newTotalProducts,
            itemsInfo: newItemInfo
        }));
    }
    return (
        <CartContext.Provider value={{ cartInfo, handleQuantityChange }}>{props.children}</CartContext.Provider>
    )
}

export default CartContextProvider
