import inputGroup from './inputGroup.module.scss';

const InputGroup = ({ children, classes }) => {
    return (
        <div className={classes ? classes : inputGroup.input__group}>
            {children}
        </div>
    );
}

export default InputGroup;