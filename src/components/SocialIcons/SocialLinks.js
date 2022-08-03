import cn from 'classnames';
import { Link } from "react-router-dom";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../Icons/Icons";

import social from './socialLinks.module.scss';


const SocialLinks = ({ size, iconColor }) => {
    return (
        <ul className={cn(social['social-links'], size ? { [social[`social-links--${size}`]]: size } : '')}>
            <li>
                <Link className="social__links__item" to="/">
                    <InstagramIcon mode={iconColor} />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/">
                    <FacebookIcon mode={iconColor} />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/">
                    <TwitterIcon mode={iconColor} />
                </Link>
            </li>
        </ul>
    );
}

export default SocialLinks;