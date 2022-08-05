import { useNavigate } from 'react-router-dom';
import FlexBox from "../Layout/Flexbox"
import Lead from "../Lead/Lead"
import Button from "../Button/Button"
import Title from '../Headings/Title/Title';
import TextContent from "../TextContent/TextContent";
import page from './404.module.scss';

const PageNotFound = () => {
    const navigate = useNavigate();
    const navigateToProductsList = () => navigate('/products');
    return (
        <FlexBox classes={`${page.page_404} d-flex--minus-margin`}>
            <Title title="404" />
            <Lead text="UH OH! You're lost." />
            <TextContent
                size="base"
                content="The page you are looking for does not exist.
How you got here is a mystery. But you can click the button below
to go back to the enjoy shopping."
            />
            <Button text="shop now" type="solid" variant="primary" onPress={navigateToProductsList} />
        </FlexBox>
    )
}


export default PageNotFound