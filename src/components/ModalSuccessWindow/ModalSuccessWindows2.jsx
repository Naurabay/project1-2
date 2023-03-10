//
// This file is not used.
// It is and old attempt to make the animation of the window.
//

import React, { useEffect, useState, useRef } from 'react';
import "./styles.scss";

import { useSelector, useDispatch } from 'react-redux';
import {ModalWindowStatusUpdate} from "../../actions"


const ModalSuccessWindows2 = () => {
    console.log("Initialization");
    const display_type = useSelector((state) => state.ModalWindowReducer.display_type);
    const key_value = useSelector((state) => state.ModalWindowReducer.key);
    const elem_title = useSelector((state) => state.ModalWindowReducer.elem_title);

    const dispatch = useDispatch();
    const getModalElem = useRef();

    var ModalShow;
    // var testShow = window.setTimeout(console.log("test"), 1000)
    // var [initStartValues, setinitStartValues] = useState(0);

    function StartTimer () {
        ModalShow = window.setTimeout(HideTheModalWindow, 3000);
        console.log("Timers start");
    }

    function StopTimer () {
        window.clearTimeout(ModalShow);
        console.log(ModalShow);
    }

    function HideTheModalWindow () {
        dispatch(ModalWindowStatusUpdate("none", 0));
    }

    // if (display_type === "flex") {
        if (key_value > 1) {
        // if (elem_title) {
        // window.clearTimeout(ModalShow);
        // key_value = 0;
        // dispatch(ModalWindowStatusUpdate("flex", 0))
        // dispatch()
        // window.setTimeout(StopTimer, 1000)
        // StopTimer();
        // display_type = "none";
        // display_type = "flex";

        console.log("If condition");
        StartTimer();
    }

    useEffect(() => {
        getModalElem.current.style.display = "none";
        StopTimer();
        getModalElem.current.style.display = display_type;

        console.log("useEffect");
        // Method of movement
        // let i = 20;
        // const interval = setInterval(() => {
        //     if(display_type === "flex") {
        //         selectModalWindow.style.marginBottom = i + "px";
        //         i = i + 1;
        //         console.log(i)
        //     } else {
        //         return () => clearInterval(interval);
        //     }
        // }, 10);
        // return () => clearInterval(interval);
    }, [display_type])

    return (
        <div
            className='modalTest'
            ref={getModalElem}
        >{ console.log("render")}
            You successfully added {elem_title} in your cart.
        </div>
    );

};

export default ModalSuccessWindows2;