import { Link } from "react-router-dom";
import cn from 'classnames';
import nav from './nav.module.scss';

const Nav = ({ links, label, labelContent, direction, gap, center }) => {
    console.log('diretion', gap);
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
        <nav aria-labelledby={label} className={nav.menu} >
            <h2 id={label} className={nav.visuallyHidden}>{labelContent}</h2>
            <ul className={cn(nav.menu__list, direction ? { [nav[`menu__list--${direction}`]]: direction } : '', gap ? { [nav[`menu__list--${gap}`]]: gap } : '', center ? { [nav[`menu__list--${center}`]]: center } : '')}>
                <GenerateList lists={links} />
            </ul>
        </nav>
    );
}

export default Nav;