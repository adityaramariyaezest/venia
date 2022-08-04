import FormGroup from '../FormGroup/FormGroup';
import { ChevronDownIcon } from '../Icons/Icons';

import select from './select.module.scss';

const Select = ({ id, placeholder, sortByPrice, direction, hideLabel, labelText, options }) => {
    return (
        <FormGroup labelText={labelText} id={id} direction={direction} hideLabel={hideLabel}>
            <div className={select.select__wrapper}>
                <select className={select.form__control} id={id} onChange={sortByPrice}>
                    {/* <option defaultValue={placeholder}>
                        {placeholder}

                    </option> */}
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <ChevronDownIcon />
            </div>
        </FormGroup>

    );
}

export default Select;