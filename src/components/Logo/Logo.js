import { Link } from "react-router-dom";
import logo from './logo.module.scss';

const Logo = ({ name }) => {
    return (
        <Link to="/" className={logo.logo}>
            <img src={`${process.env.PUBLIC_URL}/${name}`} alt="logo" />
        </Link>
    );
}

export default Logo;