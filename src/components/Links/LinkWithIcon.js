import Image from "../Image/Image";

import './link-with-icon.scss';

const LinkWithIcon = ({ linkText, linkIcon }) => {
    return (
        <a href="/login" className="link">
            <Image name={linkIcon} />
            <span>{linkText}</span>
        </a>
    );
}

export default LinkWithIcon;