import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import './header.scss';
import Wrapper from "./Wrapper";

const menu = [
    {
        id: 'women__101',
        link: 'women',
        to: '/women'
    },

    {
        id: 'men__101',
        link: 'men',
        to: '/men'
    },

    {
        id: 'smargear__101',
        link: 'Smart Gear',
        to: '/smartgear'
    },

    {
        id: 'Accessories__101',
        link: 'Accessories',
        to: '/accessories'
    },
]

const Header = () => {
    return (
        <header>
            <div className="aem-Grid aem-Grid--12">
                <Wrapper>
                    <Logo />
                </Wrapper>

                <Wrapper>
                    <Nav classes="menu" links={menu} label="mainmenulabel" labelContent="main menu" />
                </Wrapper>

                <Wrapper>
                    <Nav classes="menu" links={menu} label="extralinks" labelContent="extra links" />
                </Wrapper>
            </div>
        </header>
    );
}

export default Header;