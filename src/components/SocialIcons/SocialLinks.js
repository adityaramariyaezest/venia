import Image from "../Image/Image";
import social from './socialLinks.module.scss';
import { Link } from "react-router-dom";

const SocialLinks = () => {
    return (
        <ul className={social.social__links}>
            <li>
                <Link className="social__links__item" to="/">
                    <Image name="instagram.svg" alt="instagram" />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/">
                    <Image name="facebook.svg" alt="facebook" />
                </Link>
            </li>
            <li>
                <Link className="social__links__item" to="/">
                    <Image name="twitter.svg" alt="twitter" />
                </Link>
            </li>
        </ul>
    );
}

export default SocialLinks;