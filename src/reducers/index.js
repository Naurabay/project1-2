const initialState = {
    menu: [],
    loading: true,
    error: false,
    cart_items: [],
    location_val: "/",
    all_menu: [],
    elem_on_page: null,
    category_page: "menu"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MENU_LOADED":
            const menuModified = action.payload;
            const verifyIfQuantity = menuModified.find(el => el.quantity)
            if(!!(verifyIfQuantity) === false){
                menuModified.map(el => el.quantity = 1)
            }
            return {
                ...state,
                menu: menuModified,
                loading: false,
                all_menu: menuModified
            };
        case "MENU_REQUESTED":
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case "ERROR_OCCURREND":
            return {
                error: true
            };
        case "ADD_TO_CART":
        
        const getId = action.payload;
        const prevState = state.menu.slice();
        //We need to find the object in the array that contains the same getId. For that we get the index of this object.
        const findElem = prevState.findIndex(array_el => array_el.id === getId);
        const newEl = state.cart_items.slice();
        //If we found an object with the same id as the object we clicked, than add i++
        const verifyCondition = newEl.find(el => el.id === getId);
        if(!!(verifyCondition)) {
            verifyCondition.quantity++;
        }else {
            newEl.push(prevState[findElem]);
        }
            return {
                ...state,
                cart_items: newEl
            };

        case "REMOVE_FROM_CART":

        const removeID = action.payload;
        const prevCart = state.cart_items.slice();
        const findElemToRemove = prevCart.findIndex(array_el => array_el.id === removeID);
        prevCart.splice(findElemToRemove, 1);
            return {
                ...state,
                cart_items: prevCart
            };

        case "ADD_QUANTITY_ELEMENT":
        
        const addID = action.payload;
        const prevCartState = state.cart_items.slice();
        const findElemToAdd = prevCartState.findIndex(array_el => array_el.id === addID);
        prevCartState[findElemToAdd].quantity++;
            return {
                ...state,
                cart_items: prevCartState
            };
        
        case "REDUCE_QUANTITY_ELEMENT":

        const reduceID = action.payload;
        const prevCartStateReduce = state.cart_items.slice();
        const findElemToReduce = prevCartStateReduce.findIndex(array_el => array_el.id === reduceID);
        if (prevCartStateReduce[findElemToReduce].quantity > 1){
            prevCartStateReduce[findElemToReduce].quantity--;
        }else {
            prevCartStateReduce.splice(findElemToReduce, 1);
        }
            return {
                ...state,
                cart_items: prevCartStateReduce
            }
        
        case "SEND_LOCATION_VALUE":
            return{
                ...state,
                location_val: action.payload
            }
        case "MODIFY_TO_SALADS":
            const prevMenu = state.all_menu.slice();
            const CategorySaladsElements = prevMenu.filter(elem => elem.category === "salads");
            return {
                ...state,
                menu: CategorySaladsElements,
                category_page: "salads"
            }
        case "GO_TO_MENU":
            const getMenu = state.all_menu.slice();
            return {
                ...state,
                location_val: "/",
                menu: getMenu,
                category_page: "menu"
                
            }
        case "MODIFY_TO_MEATS":
            const menuForMeat = state.all_menu.slice();
            const CategoryMeatElements = menuForMeat.filter(elem => elem.category === "meat");
            return {
                ...state,
                menu: CategoryMeatElements,
                category_page: "meats"
            }
        case "MODIFY_TO_PIZZAS":
            const menuForPizzas = state.all_menu.slice();
            const CategoryPizzasElements = menuForPizzas.filter(elem => elem.category === "pizza");
            return {
                ...state,
                menu: CategoryPizzasElements,
                category_page: "pizzas"
            }

        case "NEW_DATA_FOR_ITEM_DETAILS":
            const getMenuForItemDetails = state.all_menu.slice();
            const PageCategory = action.payload.split("/");
            const getNameItemDetail = getMenuForItemDetails.filter(elem => 
                elem.title.toLowerCase().replace(/ /g,"") === action.payload.split("/").pop()
                );
            return {
                ...state,
                elem_on_page: getNameItemDetail,
                category_page: PageCategory[1]
            }
        case "CHANGE_CATEGORY_PAGE_TO_CART":{
            return {
                ...state,
                category_page: "cart"
            }
        }
        default:
            return state;
    }
}

export default reducer;