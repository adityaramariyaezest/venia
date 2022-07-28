import cn from 'classnames';
import f from './formGroup.module.scss';

const FormGroup = ({ id, labelText, children, hideLabel, type, direction, custom }) => {
    return (
        <div className={cn(f['form-group'], custom ? { [f[`form-group--${custom}`]]: custom } : '', type ? { [f[`form-group--${type}`]]: type } : '', direction ? { [f[`form-group--${direction}`]]: direction } : '')}>
            <label className={hideLabel ? f.hideLabel : null} for={id}>{labelText}</label>
            {children}
        </div>
    )
}

export default FormGroup;