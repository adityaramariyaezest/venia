import './checkbox.scss';
import Input from '../Input/Input';

const Checkbox = ({ filterCheckbox }) => <Input type="checkbox" id={filterCheckbox.id} labelText={filterCheckbox.type} classes="checkbox" />

export default Checkbox;