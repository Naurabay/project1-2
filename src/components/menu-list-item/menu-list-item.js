import React, {useContext} from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {DataAboutElement, AddToCard, ModalWindowStatusUpdate} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import TransferMenuLinkName from "../resto-service-context/TransferMenuLinkName";

//ICONS
import icn_pizza from "../app/menu_icons/icn_pizza.svg";
import icn_meat from "../app/menu_icons/icn_meat.svg";
// import icn_salad from "../app/menu_icons/icn_salad.svg";
import icn_salad2 from "../app/menu_icons/icn_salad2.svg";

//Deleting styles from <Link/>
const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: black;
}`; 


const MenuListItem = ({menuItem}) => {

    const menu = useContext(TransferMenuLinkName);
    const dispatch = useDispatch();
    const getValFromStore = useSelector((state) => state.ModalWindowReducer.key);
    // var ValAdd = getValFromStore + 1;

    function SendDataAboutElem(val) {
        dispatch(DataAboutElement(val));
    };

    function SendItemToCard(id) {
        dispatch(AddToCard(id));
    };

    function SendDisplayUpdate(value, elem_title) {
        dispatch(ModalWindowStatusUpdate(value, elem_title));
    };

    //Icon setup
    const categoryShowElem = (category) => {
        switch(category) {
            case "pizza": {
                return <img alt="error pizza icon" src={icn_pizza} className="rightMove"/>
            }
            case "meat": {
                return <img alt="error meat icon" src={icn_meat} className="rightMove"/>
            }
            case "salads": {
                return <img alt="error salad icon" style={{width: "55%"}} src={icn_salad2} className="rightMove"/>
            }
            default: {
                return null
            }
        }
    }

    const {id, title, price, url, category} = menuItem;

    return (
        <>
            <li className="menu__item hoverEffect">
        <StyledLink to={`/food-menu-react/${menu}/${title.toLowerCase().replace(/ /g,"")}`}
                    onClick={() => SendDataAboutElem(menuItem)}>
                <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
        </StyledLink>
                <div className='icn'>
                    <div className='leftMove'>
                        <div className="menu__category">Category: <span>{category}</span></div>
                        <div className="menu__price">Price: <span>{price}$</span></div>
                        <button
                        className="menu__btn"
                        onClick={() => {SendItemToCard(id); SendDisplayUpdate(getValFromStore + 1, title)}
                        }>Add to cart</button>
                    </div>
                    <div className='centerIcn'>
                        {categoryShowElem(category)}
                    </div>
                </div>
            </li>
        </>
    )
}

export default MenuListItem;