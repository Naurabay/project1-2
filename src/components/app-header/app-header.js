import React, {useState, useRef, useEffect} from 'react';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {LocationValueSend, GoToMenu, ChangeCategoryPageToCart} from "../../actions";

// Icons
import cartIcon from './shopping-cart-solid.svg';
import cartIconHover from './shopping-cart-solid-hover.svg';
import { RedirectButton } from './redirectButton';

const AppHeader = () => {

    let totalShow;
    const total = useSelector((state) => state.reducer.cart_items);
    const link_status = useSelector((state) => state.reducer.category_page);
    (total.length === 0 )? totalShow = 0 : totalShow = 0 ;total.map(el => {return totalShow = totalShow + el.price*el.quantity})

    const dispatch = useDispatch();
    function SendLocVal (val) {
        dispatch(LocationValueSend(val));
    }

    function GoToMainMenu() {
        dispatch(GoToMenu());
    }

    function SendCartLink() {
        dispatch(ChangeCategoryPageToCart());
    }

    const [iconState, setIconState] = useState(cartIcon);
    const changeCartIcon = useRef();

    // useEffect(() => {
    //     if(link_status === "cart"){
    //         changeCartIcon.current.src = cartIconHover;
    //         setIconState(cartIconHover);

    //     } else {
    //         changeCartIcon.current.src = cartIcon;
    //         setIconState(cartIcon);
    //     }
    // }, [link_status])

    const handleClick = () => {
        window.location.href = 'https://main--meek-haupia-56f805.netlify.app';
      };
      
    return (
        <header className="header">
            <Link className={`header__link ${(link_status === "menu") ? "header__selected" : null }`} to="/food-menu-react" onClick={() => GoToMainMenu()}>
                Menu
            </Link>
            <Link className={`header__link ${(link_status === "salads") ? "header__selected" : null }`} to="/food-menu-react/salads" onClick={() => SendLocVal("/salads")}>
                Salads
            </Link>
            <Link className={`header__link ${(link_status === "meats") ? "header__selected" : null }`} to="/food-menu-react/meats" onClick={() => SendLocVal("/meats")}>
                Meats
            </Link>
            <Link className={`header__link ${(link_status === "pizzas") ? "header__selected" : null }`} to="/food-menu-react/pizzas" onClick={() => SendLocVal("/pizzas")}>
                Pizzas
            </Link>
            <Link className={`header__link ${(link_status === "todo") ? "header__selected" : null }`} to="/todo">
                ToDo
            </Link>
            <Link className={`header__link ${(link_status === "space") ? "header__selected" : null }`} to="/space" onClick={handleClick}>
                Space
            </Link>
            <Link
                className={`header__link ${(link_status === "cart") ? "header__selected" : null }`}
                to="/food-menu-react/cart"
                onClick={() => SendCartLink()}
                onMouseOver={() => setIconState(cartIconHover)}
                onMouseLeave={() => setIconState(cartIcon)}
                >
                {/* rome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
                <img className="header__cart"
                src={(link_status === "cart") ? cartIconHover : iconState}
                alt="cart"
                onMouseOver={() => setIconState(cartIconHover)}
                onMouseLeave={() => setIconState(cartIcon)}
                ref={changeCartIcon}
                />
                Total: {totalShow} $
            </Link>
        </header>
    )
};

export default AppHeader;