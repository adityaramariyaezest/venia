import cn from 'classnames';
import { Link } from "react-router-dom";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../Icons/Icons";

import social from './socialLinks.module.scss';


const SocialLinks = ({ size, iconColor }) => {
    return (
        <ul className={cn(social['social-links'], size ? { [social[`social-links--${size}`]]: size } : '')}>
            <li>
                <Link className="social__links__item" to="/" aria-label="instagram__icon">
                    <InstagramIcon mode={iconColor} />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/" aria-label="facebook__icon">
                    <FacebookIcon mode={iconColor} />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/" aria-label="twitter__icon">
                    <TwitterIcon mode={iconColor} />
                </Link>
            </li>
        </ul>
    );
}

export default SocialLinks;