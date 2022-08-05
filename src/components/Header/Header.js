import React, { useState } from 'react';
import cn from 'classnames';
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Hamburger from '../Hamburger/Hamburger';
import { ShoppingCartIcon } from '../Icons/Icons';
import { CartCount } from "../CartCount/CartCount";

import header from './header.module.scss';

const menu = [
    {
        id: 'Home__101',
        link: 'home',
        to: '/'
    },
    {
        id: 'women__101',
        link: 'women',
        to: '/products'
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
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

    return (
        <header
            className={cn(header.header,
                showMobileMenu ? { [header[`header--${showMobileMenu}`]]: showMobileMenu } : '')}>
            <Container>
                <div className="aem-Grid aem-Grid--12">
                    <Wrapper phone="8" tablet="2" desktop="4">
                        <FlexBox classes="d-flex d-flex--align-center">
                            <Hamburger toggleMobileMenu={toggleMobileMenu} />
                            <Logo name="logo-dark.PNG" />
                        </FlexBox>
                    </Wrapper>

                    <Wrapper phone="4" tablet="8" desktop="4">
                        <Nav
                            classes={header.menu}
                            mainMenu='main-menu'
                            direction="row"
                            center="align-center"
                            gap="32" links={menu}
                            label="mainmenulabel"
                            labelContent="main menu" />
                    </Wrapper>

                    <Wrapper phone="4" tablet="2" desktop="4">
                        <FlexBox classes="d-flex d-flex--justify-end d-flex--no-gap">
                            {/* <FlexItem>
                                <Search />
                            </FlexItem> */}

                            {/* <FlexItem>
                                <LinkWithIcon svgMode="light" classes="sign__in" linkText="Sign In" linkIcon={UserIcon} />
                            </FlexItem> */}

                            <FlexItem>
                                <CartCount icon={ShoppingCartIcon} iconColor="light" linkTo="/cart" />
                            </FlexItem>
                        </FlexBox>
                    </Wrapper>
                </div>
            </Container>
        </header>
    );
}

export default Header;