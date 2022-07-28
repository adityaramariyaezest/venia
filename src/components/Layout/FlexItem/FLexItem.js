
import cn from 'classnames';
import fi from './flexItem.module.scss';

const FlexItem = ({ size, children, classes }) => {
    return (
        <div className={cn(fi[`flex-item`], size ? { [fi[`flex-item--${size}`]]: size } : '', classes ? classes : '')}>
            {children}
        </div>
    );
}

export default FlexItem;