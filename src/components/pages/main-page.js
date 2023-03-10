import React, {useEffect} from 'react';
import MenuList from '../menu-list';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ModifyAllToSalads, GoToMenu, ModifyAllToMeats, ModifyAllToPizzas } from "../../actions"

const MainPage = () => {
    const loc = useLocation();
    const dispatch = useDispatch();
    const locval = useSelector(state => state.reducer.location_val);

    // if(locval === "/" || loc.pathname === "/") {
    //     dispatch(GoToMenu());
    // };
    useEffect(() => {
        if(locval === "/salads" || loc.pathname === "/food-menu-react/salads") {
            dispatch(ModifyAllToSalads());
        };
    
        if(locval === "/meats" || loc.pathname === "/food-menu-react/meats") {
            dispatch(ModifyAllToMeats());
        };
    
        if(locval === "/pizzas" || loc.pathname === "/food-menu-react/pizzas") {
            dispatch(ModifyAllToPizzas());
        };
    },[locval, loc.pathname])


    return (
        <MenuList LocEl={loc}/>
    )
}

export default MainPage;
