import cn from 'classnames';
import tc from './textContent.module.scss';

const TextContent = ({ content, size, color }) => {
    return (
        <p className={cn(tc['text-content'], size ? { [tc[`text-content--${size}`]]: size } : '', color ? { [tc[`text-content--${color}`]]: color } : '')}>{content}</p>
    );
}

export default TextContent;