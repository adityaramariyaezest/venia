import Image from "../Image/Image";
import social from './socialLinks.module.scss';

const SocialLinks = () => {
    return (
        <ul className={social.social__links}>
            <li>
                <a className="social__links__item" href=" ">
                    <Image name="instagram.svg" alt="instagram" />
                </a>
            </li>
            <li>
                <a className="social__links__item" href=" ">
                    <Image name="facebook.svg" alt="facebook" />
                </a>
            </li>
            <li>
                <a className="social__links__item" href=" ">
                    <Image name="twitter.svg" alt="twitter" />
                </a>
            </li>
        </ul>
    );
}

export default SocialLinks;