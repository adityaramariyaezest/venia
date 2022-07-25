import TeaserContent from './TeaserContent/TeaserContent';
import TeaserImage from './TeaserImage/TeaserImage';
import FlexBox from '../Layout/Flexbox';

const Teaser = ({ image, description }) => {
    return (
        <FlexBox>
            <TeaserContent
                title="Take off in the new Signature Legging"
                secondaryTitle="Lorem Ipsum Dolor Tempor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna."
            />
            <TeaserImage image={image} description={description} />
        </FlexBox>
    );
}

export default Teaser;