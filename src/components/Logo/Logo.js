const Logo = () => {
    return (
        <a href="/">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </a>
    );
}

export default Logo;