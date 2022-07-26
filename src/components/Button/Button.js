
const Button = ({ text, classes, isIcon, icon, onPress, round }) => {
    const Icon = icon;

    return (
        <button className={round ? `btn btn-${round} btn-${classes} ` : `btn btn-${classes}`} type="button" onClick={onPress}>
            {isIcon ? <Icon /> : null}
            {text}
        </button >
    );
}

export default Button;