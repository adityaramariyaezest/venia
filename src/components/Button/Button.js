
import Image from "../Image/Image";

const Button = ({ text, classes, isIcon, icon }) => {
    return (
        <button className={`btn btn-${classes}`} type="button">
            {isIcon ? <Image source={icon} /> : null}
            {text}
        </button >
    );
}

export default Button;