import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import FlexBox from "../Layout/Flexbox";
import Search from "../Search/Search";
import LinkWithIcon from "../Links/LinkWithIcon";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Hamburger from '../Hamburger/Hamburger';
import { UserIcon, ShoppingCartIcon } from '../Icons/Icons';

import header from './header.module.scss';

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
        <header className={header.header}>
            <Container>
                <div className="aem-Grid aem-Grid--12">
                    <Wrapper phone="8" tablet="4" desktop="4">
                        <FlexBox classes="d-flex">
                            <Hamburger />
                            <Logo name="logo-dark.PNG" />
                        </FlexBox>
                    </Wrapper>

                    <Wrapper phone="hide" tablet="4" desktop="4">
                        <Nav classes={header.menu} direction="row" center="align-center" gap="32" links={menu} label="mainmenulabel" labelContent="main menu" />
                    </Wrapper>

                    <Wrapper phone="4" tablet="4" desktop="4">
                        <FlexBox classes="d-flex d-flex--justify-end pt__10">
                            <Search />
                            <LinkWithIcon classes="sign__in" linkText="Sign In" linkIcon={UserIcon} />
                            <Link to="/cart"><ShoppingCartIcon mode="light" /></Link>
                        </FlexBox>
                    </Wrapper>
                </div>
            </Container>
        </header>
    );
}

export default Header;