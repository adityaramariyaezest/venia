import { Link } from "react-router-dom";

import nav from './nav.module.scss';

const Nav = ({ links, label, labelContent }) => {
    const GenerateList = ({ lists }) => {
        return lists && lists.map((listItem, index) => {
            return (
                <li key={index} className={nav.menu__item}>
                    <Link to={listItem.to}>{listItem.link}</Link>
                </li>
            )
        })
    }

    return (
        <nav aria-labelledby={label} className={nav.menu}>
            <h2 id={label} className={nav.visuallyHidden}>{labelContent}</h2>
            <ul className={nav.menu__list}>
                <GenerateList lists={links} />
            </ul>
        </nav>
    );
}

export default Nav;