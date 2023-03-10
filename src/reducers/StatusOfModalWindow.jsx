const initStateModal = {
    key: 0,
    elem_title: null
}

const ModalWindowReducer = (state = initStateModal, action) => {
    switch(action.type) {
        case "MODAL_WINDOW_STATUS":
            // const addValAction = action.value + 1;
            return {
                ...state,
                key: action.value,
                elem_title: action.elemTitle
            }
        default:
            return state;
    }
}

export default ModalWindowReducer;