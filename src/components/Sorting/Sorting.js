import FormGroup from "../FormGroup/FormGroup";
import FlexBox from "../Layout/Flexbox";
import Select from "../Select/Select";

const Filter = ({ id, sortByPrice }) => {
    return (
        <FlexBox classes="d-flex d-flex__justify__content__between">
            <p>20 Results</p>
            <FormGroup labelText="sort" id={id} hiddenLabel>
                <Select id={id} placeholder="Sort by Latest" sortByPrice={sortByPrice} />
            </FormGroup>
        </FlexBox>
    );
}

export default Filter;