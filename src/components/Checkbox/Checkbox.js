import './checkbox.scss';
import Input from '../Input/Input';

const Checkbox = ({ filterCheckbox, id }) => <Input type="checkbox" id={id} labelText={filterCheckbox} classes="checkbox" />


export default Checkbox;