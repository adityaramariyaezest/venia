import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import FlexBox from '../Layout/Flexbox';
import bs from './bannerSlider.module.scss';

const BannerSlider = ({ image, description }) => {
    const navigate = useNavigate();
    const navigateToProductsList = () => navigate('/products');

    return (
        <div className={bs.banner}>
            <FlexBox classes="d-flex__cover d-flex--align-center">
                <div className={bs.banner__image}>
                    <img src={image} alt={description} height="150" />
                </div>
                <div className={bs.banner__content}>
                    <h1>Shop the new Signature Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                    <Button text="shop now" type="solid" variant="primary" onPress={navigateToProductsList} />
                </div>
            </FlexBox>
        </div>
    );
}

export default BannerSlider;


