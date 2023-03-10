import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RemoveFromCart, AddQuantityElement, ReduceQuantityElement, ChangeCategoryPageToCart} from "../../actions"
import { useLocation } from 'react-router-dom';
import './cart-table.scss';

const CartTable = () => {

    const CartItems = useSelector((state) => state.reducer.cart_items);
    const CartLocation = useSelector((state) => state.reducer.category_page);
    const dispatch = useDispatch();
    const present_location = useLocation();
    
    if(CartLocation !== "cart" && present_location.pathname === "/cart"){
        dispatch(ChangeCategoryPageToCart());

    }

    function RemoveItemFromCart(id) {
        dispatch(RemoveFromCart(id));
    }

    function AddQuantity(id) {
        dispatch(AddQuantityElement(id));
    }

    function ReduceQuantity(id) {
        dispatch(ReduceQuantityElement(id));
    }

    return (
        <>
            <div className="cart__title">Your command:</div>
            <div className="cart__list">
                {
                    CartItems.map((el) => {
                        const {id, title, price, url, quantity} = el;
                        return(
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title} x{quantity}</div>
                            <div className="cart__item-price">
                            <button className='button button_add' onClick={() => AddQuantity(id)}>+</button>
                                {price*quantity}$
                            <button className='button button_reduce' onClick={() => ReduceQuantity(id)}>-</button>
                            </div>
                            <div className="cart__close" onClick={() => RemoveItemFromCart(id)}>&times;</div>
                        </div>
                        )
                    })
                }
                
                
            </div>
        </>
    );
};

export default CartTable;