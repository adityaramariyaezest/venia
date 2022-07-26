
const Button = ({ text, classes, isIcon, icon, onPress, round, svgIconMode }) => {
    const Icon = icon;

    return (
        <button className={round ? `btn btn-${round} btn-${classes} ` : `btn btn-${classes}`} type="button" onClick={onPress}>
            {isIcon ? <Icon mode={svgIconMode} /> : null}
            {text}
        </button >
    );
}

export default Button;