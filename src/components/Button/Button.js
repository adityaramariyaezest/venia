
import Image from "../Image/Image";

const Button = ({ text, classes, isIcon, icon, onPress, variant }) => {
    return (
        <button className={`btn btn-${classes}`} type="button" onClick={onPress}>
            {isIcon ? <Image name={icon} /> : null}
            {text}
        </button >
    );
}

export default Button;