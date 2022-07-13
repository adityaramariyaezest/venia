import Nav from '../Nav/Nav';
import footerMenu from './footerMenu.module.scss';

const FooterMenu = ({ heading, links, label, labelContent, hideHeading, direction }) => {
    return (
        <div className="menu">
            <h4 className={`${footerMenu.menu__heading} ${hideHeading ? footerMenu.menu__heading__hide : null}`}>{heading}</h4>
            <Nav
                classes={`${footerMenu.menu} ${direction ? footerMenu.menu__row : null}`}
                links={links}
                label={label}
                labelContent={labelContent}
            />
        </div>
    );
}

export default FooterMenu;