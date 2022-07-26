import Nav from '../Nav/Nav';
import footerMenu from './footerMenu.module.scss';

const FooterMenu = ({ heading, links, label, labelContent, hideHeading, direction }) => {
    return (
        <div className="menu">
            <p className={`${footerMenu.menu__heading} ${hideHeading ? footerMenu.menu__heading__hide : null}`}>{heading}</p>
            <Nav
                direction={direction}
                links={links}
                label={label}
                labelContent={labelContent}
            />
        </div>
    );
}

export default FooterMenu;