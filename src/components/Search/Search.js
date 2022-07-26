import Input from '../Input/Input';
import { SearchIcon } from '../Icons/Icons';
import './search.scss';

const Search = () => {
    return (
        <div className="search">
            <SearchIcon mode="light" />
            <Input id="search" labelText="Search" type="text" classes="form-control" placeholder="What would you like to find?" />
            <span className='caret'></span>
        </div>
    );
}
export default Search;