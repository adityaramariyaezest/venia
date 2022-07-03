import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </Link>
    );
}

export default Logo;