import './checkbox.scss';
import Input from '../Input/Input';

const Checkbox = ({ filterCheckbox, id, direction, onFilter }) => <Input type="checkbox" id={id} labelText={filterCheckbox} name={filterCheckbox} classes="checkbox" direction={direction} onChange={onFilter} value={filterCheckbox} />

export default Checkbox;