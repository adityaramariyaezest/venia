import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import FlexBox from "../Layout/Flexbox";
import Search from "../Search/Search";
import LinkWithIcon from "../Links/LinkWithIcon";

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
                <Wrapper phone="4" tablet="4" desktop="4">
                    <Logo />
                </Wrapper>

                <Wrapper phone="4" tablet="4" desktop="4">
                    <Nav classes="menu" links={menu} label="mainmenulabel" labelContent="main menu" />
                </Wrapper>

                <Wrapper phone="4" tablet="4" desktop="4">
                    <FlexBox classes="d-flex d-flex--justify-end">
                        <Search />
                        <LinkWithIcon linkText="Sign In" linkIcon="user" />
                    </FlexBox>
                </Wrapper>
            </div>
        </header>
    );
}

export default Header;