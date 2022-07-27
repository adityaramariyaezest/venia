import './checkbox.scss';
import Input from '../Input/Input';

const Checkbox = ({ filterCheckbox, id, direction }) => <Input type="checkbox" id={id} labelText={filterCheckbox} classes="checkbox" direction={direction} />


export default Checkbox;