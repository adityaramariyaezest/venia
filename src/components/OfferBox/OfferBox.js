import cn from 'classnames';
import o from './offerBox.module.scss'

const OfferBox = ({ children }) => {
    return (
        <div className={cn(o['offerBox'])}>
            {children}
        </div>
    );
}

export default OfferBox;