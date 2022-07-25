import TeaserContent from './TeaserContent/TeaserContent';
import TeaserImage from './TeaserImage/TeaserImage';
import FlexBox from '../Layout/Flexbox';
import Lead from '../Lead/Lead';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Title from '../Headings/Title/Title';
import Description from '../Description/Description';

const Teaser = ({ title, secondaryTitle, desc, image, description }) => {
    return (
        <FlexBox>
            <TeaserContent>
                <Title title={title} />
                <Lead text={secondaryTitle} />
                <Description content={desc} />
                <ButtonGroup>
                    <Button text="shop collection" classes="primary" />
                    <Button text="shop now" classes="primary" />
                </ButtonGroup>
            </TeaserContent>
            <TeaserImage image={image} description={description} />
        </FlexBox>
    );
}

export default Teaser;