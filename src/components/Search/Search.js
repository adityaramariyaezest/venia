import Button from '../Button/Button';
import Input from '../Input/Input';
import Image from '../Image/Image';
import './search.scss';

const Search = () => {
    return (
        <div className="search">
            <Image name="search" />
            <Input id="search" labelText="Search" type="text" classes="form-control" placeholder="What would you like to find?" />
            <span className='caret'></span>
            {/* <Button text="close" /> */}
        </div>
    );
}
export default Search;