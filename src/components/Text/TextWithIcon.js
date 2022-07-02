import Image from '../Image/Image';
import t from './textWithIcon.module.scss';

const TextWithIcon = ({ icon, text }) => {
    return (
        <div className={t.text}>
            <Image name={icon} alt={text} />
            <span>{text}</span>
        </div>
    );
}

export default TextWithIcon;