import Image from '../../Image/Image';
import ti from './teaserImage.module.scss';

const TeaserImage = ({ image, description }) => {
    return (
        <div className={ti.image}>
            <img src={image} alt={description} height="150" />
        </div>
    );
}

export default TeaserImage;