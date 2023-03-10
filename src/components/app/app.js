import React from 'react';
import {CartPage} from '../pages';
import AppHeader from '../app-header';
import {Routes, Route, useLocation} from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails"
import Layout from '../Layout/Layout';
import TransferMenuLinkName from "../resto-service-context/TransferMenuLinkName";
import ModalSuccessWindows from "../ModalSuccessWindow/ModalSuccessWindows"
import ToDoApp from '../todo/ToDoApp';
import RedirectButton from '../app-header/redirectButton';


const App = () => {

    const currLocation = useLocation();
    // console.log(currLocation);
    if(currLocation.pathname === "/food-menu-react" ||
    currLocation.pathname === "/food-menu-react/salads" ||
    currLocation.pathname === "/food-menu-react/meats" ||
    currLocation.pathname === "/food-menu-react/pizzas" || 
    currLocation.pathname === "/todo" || 
    currLocation.pathname === "/space" || 
    currLocation.pathname === "/food-menu-react/cart") {
        document.body.style.overflow = "initial"
    }

    return (
        <div className="app">
            <AppHeader/>
            <Routes>
            
            <Route path="/food-menu-react" element={<TransferMenuLinkName.Provider value={"menu"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/food-menu-react/menu/:id' element={<ItemDetails/>}/>
            </Route>
            
            <Route path='/food-menu-react/salads' element={<TransferMenuLinkName.Provider value={"salads"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/food-menu-react/salads/:id' element={<ItemDetails/>}/>
            </Route>

            <Route path='/food-menu-react/meats' element={<TransferMenuLinkName.Provider value={"meats"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/food-menu-react/meats/:id' element={<ItemDetails/>}/>
            </Route>

            <Route path='/food-menu-react/pizzas' element={<TransferMenuLinkName.Provider value={"pizzas"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/food-menu-react/pizzas/:id' element={<ItemDetails/>}/>
                
            </Route>

            <Route path="/todo" element={<ToDoApp/>}/>
            {/* <Route path="/space" element={<RedirectButton/>}/> */}

                <Route path="/food-menu-react/cart" element={<CartPage/>}/>
            </Routes>
            <ModalSuccessWindows/>
        </div>
    )
}

export default App;