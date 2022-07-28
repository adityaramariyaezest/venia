import FormGroup from '../FormGroup/FormGroup';
import { ChevronDownIcon } from '../Icons/Icons';

import select from './select.module.scss';

const Select = ({ id, placeholder, sortByPrice, direction, hideLabel, labelText }) => {
    return (
        <FormGroup labelText={labelText} id={id} direction={direction} hideLabel={hideLabel}>
            <div className={select.select__wrapper}>
                <select className={select.form__control} id={id} onChange={sortByPrice}>
                    <option defaultValue={placeholder}>
                        {placeholder}
                    </option>
                    <option value='1'>Sort by Low to High</option>
                    <option value='2'>Sort by High to Low</option>
                </select>
                <ChevronDownIcon />
            </div>
        </FormGroup>

    );
}

export default Select;