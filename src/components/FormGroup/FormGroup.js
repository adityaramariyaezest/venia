import formGroup from './formGroup.module.scss';

const FormGroup = ({ id, labelText, children, hiddenLabel }) => {
    return (
        <div className='form-group'>
            <label className={hiddenLabel ? formGroup.hide : null} for={id}>{labelText}</label>
            {children}
        </div >
    )
}

export default FormGroup;