const Logo = () => {
    return (
        <a href="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </a>
    );
}

export default Logo;