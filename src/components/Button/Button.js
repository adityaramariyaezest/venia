import cn from 'classnames';
import button from './button.module.scss';

const Button = ({ text, type, isIcon, icon, onPress, svgIconMode, variant, isBlock, disabled, image, size }) => {
    const Icon = icon;

    return (
        <button className={cn(button.btn,
            type ? { [button[`btn-${type}`]]: type } : '',
            size ? { [button[`btn-${type}--${size}`]]: size } : '',
            variant ? { [button[`btn-${type}--${variant}`]]: variant } : '',
            isBlock ? { [button[`btn-block`]]: isBlock } : '',
            image ? { [button[`btn-${image}`]]: image } : '')}
            disabled={disabled ? "disabled" : ''}
            type="button"
            onClick={onPress}>
            {isIcon ?
                <Icon mode={svgIconMode} /> : null}
            {text}
        </button >
    );
}

export default Button;