import Description from "../Description/Description";
import Title from "../Headings/Title/Title";
import FlexBox from "../Layout/Flexbox";
import Lead from "../Lead/Lead";
import TeaserContent from "../Teaser/TeaserContent/TeaserContent";
import TeaserImage from "../Teaser/TeaserImage/TeaserImage";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { Location } from "../Location/Location";
import twl from './teaserWithLocation.module.scss';


const TeaserWithLocation = ({ title, secondaryTitle, desc, image, description }) => {
    return (
        <FlexBox classes="d-flex d-flex--align-center d-flex--no-gap">
            <TeaserImage image={image} description={description} />
            <TeaserContent classes={twl.content}>
                <Title title={title} />
                <Lead text={secondaryTitle} />
                <Description content={desc} />

                <ButtonGroup>
                    <Button text="shop devices" type="outline" variant="light" />
                </ButtonGroup>
                <Location />
            </TeaserContent>
        </FlexBox>
    );
}

export default TeaserWithLocation;