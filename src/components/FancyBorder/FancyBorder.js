import fb from './fancyBorder.module.scss';

const FancyBorder = ({ children }) => {
    return (
        <div className={fb['fancy-border']}>
            {children}
        </div>
    );
}

export default FancyBorder;