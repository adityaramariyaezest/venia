import { Link } from "react-router-dom";
import './link-with-icon.scss';

const LinkWithIcon = ({ classes, linkText, linkIcon }) => {
    const Icon = linkIcon;
    return (
        <Link to="/login" className={`link ${classes}`}>
            <Icon className="svg__light" />
            <span>{linkText}</span>
        </Link>
    );
}

export default LinkWithIcon;