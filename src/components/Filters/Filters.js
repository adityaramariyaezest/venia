import Checkbox from "../Checkbox/Checkbox";
import './filters.scss';

const Filters = ({ filterByTitle, categories }) => {
    return (
        <article>
            <p>{filterByTitle}</p>
            {categories && categories.map((category, index) => <Checkbox key={index} id={`category__${index}`} filterCheckbox={category} direction="row-reverse" />)}
        </article>
    );
}

export default Filters;
