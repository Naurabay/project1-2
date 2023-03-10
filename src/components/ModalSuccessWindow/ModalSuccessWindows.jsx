import React, { useEffect, useState } from 'react';
import "./styles.scss";

import { useSelector, useDispatch } from 'react-redux';
import {ModalWindowStatusUpdate} from "../../actions"


const ModalSuccessWindows = () => {
    
    const key_value = useSelector((state) => state.ModalWindowReducer.key);
    const elem_title = useSelector((state) => state.ModalWindowReducer.elem_title);
    const dispatch = useDispatch();

    function ResetTheKeyValue () {
        dispatch(ModalWindowStatusUpdate(0))
    }
    
    useEffect(() => {
        const timer = setTimeout(() => ResetTheKeyValue(), 3000);
        return () => {
          clearTimeout(timer);
        };
      }, [key_value]);
    
    return (
        <>
        { (key_value) ?
            <div
                key={key_value}
                className='modalTest'
                onClick={() => ResetTheKeyValue()}
            >
               You successfully added&nbsp; <span>{elem_title}</span>&nbsp;in your cart.
            </div>
            : null
        }
        </>
    );
};

export default ModalSuccessWindows;