import Image from '../../Image/Image';
import ti from './teaserImage.module.scss';

const TeaserImage = ({ image, description, classes }) => {
    return (
        <div className={`${ti.image} ${classes}`} >
            <img src={image} alt={description} height="150" />
        </div>
    );
}

export default TeaserImage;