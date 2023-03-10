import React, {useEffect} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {AddToCard, LocationValueSend, DataAboutElement, ModalWindowStatusUpdate} from "../../actions"
import "./styles.css";

const ItemDetails = ({elemData, AddToCard, LocationValueSend, location_val, ModalWindowStatusUpdate, present_value}) => {
    const hist = useNavigate();
    const paramsId = useParams();
    const loc_present = useLocation();
    if(paramsId.id) {document.body.style.overflow = "hidden"};

    useEffect(() => {
        if(loc_present.pathname !== location_val){
            LocationValueSend(loc_present.pathname);
                
        }
    },[loc_present.pathname]);


    const {title, price, url, category, id} = elemData;
        return (
            <>
                <div className="modal">
                    <div className='modal__content'>
                            <div className="imgClass content" style={{backgroundImage: `url("${url}")`}}></div>
                            <div className='content textStyle title'>{title}</div>
                            <div className='textStyle content contentDistance'>
                                <div className=''>Category: <span className='spanContent'>{category}</span></div>
                                <div className='priceDistance'>Price: <span className='spanContent'>{price}$</span></div>
                            </div>
                            <button className="btn textStyle" onClick={() => {AddToCard(id); ModalWindowStatusUpdate(present_value + 1, title) }}>Add to cart</button>
                            <div className="textStyle content closeButton" onClick={() => hist(-1)}>X</div>
                    </div>
                </div>
            </>
        )
};

const mapStateToProps = (state) => {
    return {
        elemData: state.ShowReducer.elem,
        location_val: state.reducer.location_val,
        all_menu: state.reducer.all_menu,
        present_value: state.ModalWindowReducer.key
    }
}

const mapDispatchToProps = {
    AddToCard,
    LocationValueSend,
    DataAboutElement,
    ModalWindowStatusUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

