import React, { useState } from 'react';
import h from './hamburger.module.scss';

const Hamburger = ({ toggleMobileMenu }) => {
    // const [isActive, setActive] = useState(false);

    // const toggleMenu = () => {
    //     setActive(!isActive);
    // }

    console.log("toggleMobileMenu", toggleMobileMenu)
    return (
        <>
            <input id={h.menu__toggle} type="checkbox" />
            <label className={h.menu__button__container} onClick={toggleMobileMenu}>
                <div className={h.menu__button} ></div>
            </label>
        </>
    );
}

export default Hamburger;