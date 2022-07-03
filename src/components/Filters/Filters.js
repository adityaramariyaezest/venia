import Checkbox from "../Checkbox/Checkbox";
import './filters.scss';

const Filters = ({ filterByTitle, categories }) => {
    return (
        <article>
            <h6>{filterByTitle}</h6>
            {categories && categories.map(category => <Checkbox filterCheckbox={category} />)}
        </article>
    );
}

export default Filters;
