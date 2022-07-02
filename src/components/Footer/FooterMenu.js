import Nav from '../Nav/Nav';
import footerMenu from './footerMenu.module.scss';

const FooterMenu = ({ heading, links, label, labelContent }) => {
    return (
        <div className="menu">
            <h4 className={footerMenu.menu__heading}>{heading}</h4>
            <Nav
                classes={footerMenu.menu}
                links={links}
                label={label}
                labelContent={labelContent}
            />
        </div>
    );
}

export default FooterMenu;