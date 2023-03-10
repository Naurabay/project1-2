const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: "MENU_REQUESTED"
    }
}

const changeErrorStatus = () => {
    return {
        type: "ERROR_OCCURREND"
    }
}

const DataAboutElement = (itemDetails) => {
    return {
        type: "ABOUT_ELEMENT",
        payload: itemDetails
    }
}

const AddToCard = (id) => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}

const RemoveFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

const AddQuantityElement = (id) => {
    return {
        type: "ADD_QUANTITY_ELEMENT",
        payload: id
    }
}

const ReduceQuantityElement = (id) => {
    return {
        type: "REDUCE_QUANTITY_ELEMENT",
        payload: id
    }
}

const LocationValueSend = (val) => {
    return {
        type: "SEND_LOCATION_VALUE",
        payload: val
    }
}

const ModifyAllToSalads = () => {
    return {
        type: "MODIFY_TO_SALADS"
    }
}

const GoToMenu = () => {
    return {
        type: "GO_TO_MENU"
    }
}

const ModifyAllToMeats = () => {
    return {
        type: "MODIFY_TO_MEATS"
    }
}

const ModifyAllToPizzas = () => {
    return {
        type: "MODIFY_TO_PIZZAS"
    }
}

const NewDataForItemDetails = (item_name) => {
    return {
        type: "NEW_DATA_FOR_ITEM_DETAILS",
        payload: item_name
    }
}

const ChangeCategoryPageToCart = () => {
    return {
        type: "CHANGE_CATEGORY_PAGE_TO_CART"
    }
}

const ModalWindowStatusUpdate = (elem_val, elem_title) => {
    return {
        type: "MODAL_WINDOW_STATUS",
        value: elem_val,
        elemTitle: elem_title
    }
}

export {
    menuLoaded,
    menuRequested,
    changeErrorStatus,
    DataAboutElement,
    AddToCard,
    RemoveFromCart,
    AddQuantityElement,
    ReduceQuantityElement,
    LocationValueSend,
    ModifyAllToSalads,
    GoToMenu,
    ModifyAllToMeats,
    ModifyAllToPizzas,
    NewDataForItemDetails,
    ChangeCategoryPageToCart,
    ModalWindowStatusUpdate
}