import './input.scss';

const Input = ({ id, labelText, classes, type, placeholder, name, value }) => {
    return (
        <div className='form-group'>
            <label for={id}>{labelText}</label>
            <input id={id} type={type} className={classes} name={name} placeholder={placeholder} required value={value ? value : null} />
        </div >
    )
}

export default Input;
