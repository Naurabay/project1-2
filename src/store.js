import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import ShowReducer from "./reducers/InfoClickedElement";
import ModalWindowReducer from "./reducers/StatusOfModalWindow"

const store = createStore(combineReducers({reducer, ShowReducer, ModalWindowReducer}), composeWithDevTools());

export default store;