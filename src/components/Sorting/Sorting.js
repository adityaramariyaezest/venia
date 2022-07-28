import FlexBox from "../Layout/Flexbox";
import Select from "../Select/Select";

const Filter = ({ id, sortByPrice }) => {
    return (
        <FlexBox classes="d-flex d-flex__justify__content__between">
            <p>20 Results</p>
            <Select labelText="sort" id={id} placeholder="Sort by Latest" sortByPrice={sortByPrice} hideLabel="true" />
        </FlexBox>
    );
}

export default Filter;