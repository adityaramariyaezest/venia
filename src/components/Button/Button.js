import cn from 'classnames';
import button from './button.module.scss';

const Button = ({ text, type, isIcon, icon, onPress, svgIconMode, variant, isBlock, disabled, image }) => {
    const Icon = icon;

    return (
        <button className={cn(button.btn,
            type ? { [button[`btn-${type}`]]: type } : '',
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