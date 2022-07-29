import cn from 'classnames';
import input from './input.module.scss';

const Input = ({ id, labelText, classes, type, placeholder, name, value, direction, custom, onChange }) => {
    return (
        <div className={cn(input['form-group'], custom ? { [input[`form-group--${custom}`]]: custom } : '', type ? { [input[`form-group--${type}`]]: type } : '', direction ? { [input[`form-group--${direction}`]]: direction } : '')}>
            <label className={input.label} for={id}>{labelText}</label>
            <input id={id} type={type} className={classes} name={name} placeholder={placeholder} required value={value ? value : null} onChange={onChange} />
        </div >
    )
}

export default Input;
