
import cn from 'classnames';
import fi from './flexItem.module.scss';

const FlexItem = ({ size, children }) => {
    return (
        <div className={cn(fi[`flex-item`], size ? { [fi[`flex-item--${size}`]]: size } : '')}>
            {children}
        </div>
    );
}

export default FlexItem;