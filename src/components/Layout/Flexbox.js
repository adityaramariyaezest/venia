import './flexbox.scss';

const FlexBox = ({ classes, children }) => {
    return (
        <div className={`d-flex ${classes ? classes : ''}`}>
            {children}
        </div>
    );
}

export default FlexBox;