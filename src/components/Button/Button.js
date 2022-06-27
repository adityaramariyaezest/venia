
import Image from "../Image/Image";

const Button = ({ text, classes, isIcon, icon, onPress }) => {
    return (
        <button className={`btn btn-${classes}`} type="button" onClick={onPress}>
            {isIcon ? <Image source={icon} /> : null}
            {text}
        </button >
    );
}

export default Button;