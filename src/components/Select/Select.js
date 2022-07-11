import select from './select.module.scss';

const Select = ({ id, value, placeholder }) => {
    return (
        <select className={select.form__control} id={id}>
            <option value="none" selected disabled hidden>
                {placeholder}
            </option>
            <option value={value}>{value}</option>
        </select>
    );
}

export default Select;