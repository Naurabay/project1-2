const ElemState = {
    elem: []
}

const ShowReducer = (state = ElemState, action) => {
    switch(action.type) {
        case "ABOUT_ELEMENT":
            return {
                elem: action.payload
            }
        default:
            return state;
    }
}

export default ShowReducer;