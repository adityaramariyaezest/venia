import React, { useState } from 'react';
import h from './hamburger.module.scss';

const Hamburger = () => {
    const [isActive, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!isActive);
    }

    return (
        <>
            <input id={h.menu__toggle} type="checkbox" onClick={toggleMenu} />
            <label className={h.menu__button__container}>
                <div className={h.menu__button} ></div>
            </label>
        </>
    );
}

export default Hamburger;