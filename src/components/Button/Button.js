
import Image from "../Image/Image";

const Button = ({ text, classes, isIcon, icon, onPress, round }) => {
    return (
        <button className={round ? `btn btn-${round} btn-${classes} ` : `btn btn-${classes}`} type="button" onClick={onPress}>
            {isIcon ? <Image name={icon} /> : null}
            {text}
        </button >
    );
}

export default Button;