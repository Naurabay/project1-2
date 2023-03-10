import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import {menuLoaded, menuRequested, changeErrorStatus,
ModifyAllToSalads, ModifyAllToMeats, ModifyAllToPizzas,
NewDataForItemDetails, DataAboutElement} from "../../actions"
import WithRestoService from '../hoc';
import Spinner from "../spinner";
import Error from "../error"

import './menu-list.scss';

class MenuList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .then(res => {if(this.props.LocEl.pathname === "/salads"){
            this.props.ModifyAllToSalads();
        }})
        .then(res => {if(this.props.LocEl.pathname === "/meats"){
            this.props.ModifyAllToMeats();
        }})
        .then(res => {if(this.props.LocEl.pathname === "/pizzas"){
            this.props.ModifyAllToPizzas();
        }})
        .then(res => {if(this.props.location_val !== "/" &&
            this.props.location_val !== "/salads" &&
            this.props.location_val !== "/meats" &&
            this.props.location_val !== "/pizzas"){
            this.props.NewDataForItemDetails(this.props.location_val);
            this.props.DataAboutElement(this.props.itemDetail[0]);
        }})
        .then(res => {if(this.props.category_page === "salads"){
            this.props.ModifyAllToSalads();
        }})
        .then(res => {if(this.props.category_page === "meats"){
            this.props.ModifyAllToMeats();
        }})
        .then(res => {if(this.props.category_page === "pizzas"){
            this.props.ModifyAllToPizzas();
        }})

    }

    componentDidCatch() {
        this.props.changeErrorStatus();
    }

    render() {
        const {menuItems, loading, error} = this.props;
        //I need a value for example, "salads" and then menuItems should be only made from salads
        //"salads" value should came from useLocation
        if(error) {
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(item => {return (<MenuListItem key={item.id} menuItem={item}/>)})
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.reducer.menu,
        loading: state.reducer.loading,
        error: state.reducer.error,
        location_val: state.reducer.location_val,
        itemDetail: state.reducer.elem_on_page,
        category_page: state.reducer.category_page

    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    changeErrorStatus,
    ModifyAllToSalads,
    ModifyAllToMeats,
    ModifyAllToPizzas,
    NewDataForItemDetails,
    DataAboutElement
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));