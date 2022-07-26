import { Link } from "react-router-dom";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../Icons/Icons";

import social from './socialLinks.module.scss';


const SocialLinks = () => {
    return (
        <ul className={social.social__links}>
            <li>
                <Link className="social__links__item" to="/">
                    <InstagramIcon classes={social.svg__light} />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/">
                    <FacebookIcon />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/">
                    <TwitterIcon />
                </Link>
            </li>
        </ul>
    );
}

export default SocialLinks;