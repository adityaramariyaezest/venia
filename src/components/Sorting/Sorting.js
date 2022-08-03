import FlexBox from "../Layout/Flexbox";
import Select from "../Select/Select";

import sorting from './sorting.module.scss';

const Filter = ({ id, sortByPrice, totalProducts }) => {

    return (
        <FlexBox classes="d-flex d-flex__justify__content__between">
            <p className={sorting.sorting__title}>{totalProducts} Results</p>
            <Select labelText="sort" id={id} placeholder="Sort by Latest" sortByPrice={sortByPrice} hideLabel="true" />
        </FlexBox>
    );
}

export default Filter;