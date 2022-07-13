import Image from "../Image/Image";
import { Link } from "react-router-dom";
import './link-with-icon.scss';

const LinkWithIcon = ({ classes, linkText, linkIcon }) => {
    return (
        <Link to="/login" className={`link ${classes}`}>
            <Image name={linkIcon} alt={linkText} />
            <span>{linkText}</span>
        </Link>
    );
}

export default LinkWithIcon;