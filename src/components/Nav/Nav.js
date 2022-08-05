import { NavLink } from 'react-router-dom'
import cn from 'classnames';
import nav from './nav.module.scss';

const Nav = ({ links, label, labelContent, direction, gap, center, underlined, mainMenu, classes }) => {
    const GenerateList = ({ lists }) => {
        return lists && lists.map((listItem, index) => {
            return (
                <li key={index} className={nav.menu__item}>
                    <NavLink activeClassName="active" to={listItem.to}>{listItem.link}</NavLink>
                </li>
            )
        })
    }
    return (
        <nav aria-labelledby={label} className={cn(nav.menu, mainMenu ? { [nav[`menu-${mainMenu}`]]: mainMenu } : '', classes ? classes : '')} >
            <h2 id={label} className={nav.visuallyHidden}>{labelContent}</h2>
            <ul className={cn(nav.menu__list, direction ? { [nav[`menu__list--${direction}`]]: direction } : '',
                gap ? { [nav[`menu__list--${gap}`]]: gap } : '',
                center ? { [nav[`menu__list--${center}`]]: center } : '',
                underlined ? { [nav[`menu__list--${underlined}`]]: underlined } : '', classes ? `${classes}-list` : '')}>
                <GenerateList lists={links} />
            </ul>
        </nav>
    );
}

export default Nav;