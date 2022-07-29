import './checkbox.scss';
import Input from '../Input/Input';

const Checkbox = ({ filterCheckbox, id, direction, handleCheckbox }) => <Input type="checkbox" id={id} labelText={filterCheckbox} name={filterCheckbox} classes="checkbox" direction={direction} onChange={handleCheckbox} />


export default Checkbox;