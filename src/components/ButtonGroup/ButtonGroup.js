import b from './buttongroup.module.scss'

const ButtonGroup = ({ children }) => {
    return (
        <div className={b.button__group}>
            {children}
        </div>
    );
}

export default ButtonGroup;