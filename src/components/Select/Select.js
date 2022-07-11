import select from './select.module.scss';

const Select = ({ id, placeholder, sortByPrice }) => {
    return (
        <select className={select.form__control} id={id} onChange={sortByPrice}>
            <option value="none" selected disabled hidden>
                {placeholder}
            </option>
            <option value='1'>Sort by Low to High</option>
            <option value='2'>Sort by High to Low</option>
        </select>
    );
}

export default Select;