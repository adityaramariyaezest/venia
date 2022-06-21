import Input from '../Input/Input';
import styles from './search.scss';

const Search = () => {
    return (
        <div className="search">
            <span role="search" aria-label="my search icon" className="icon icon-search"></span>
            <Input type="text" classes="form-control" placeholder="What would you like to find?" />
            <button type="button">close</button>
        </div>
    );
}
export default Search;