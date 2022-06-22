import './flexbox.scss';

const FlexBox = ({ classes, children }) => {
    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default FlexBox;