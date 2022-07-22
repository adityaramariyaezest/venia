import Button from '../Button/Button';
import Container from '../Container/Container';
import FlexBox from '../Layout/Flexbox';
import bs from './bannerSlider.module.scss';

const BannerSlider = ({ image, description }) => {
    return (
        <div className={bs.banner}>
            <FlexBox classes="d-flex__cover">
                <div className={bs.banner__image}>
                    <img src={image} alt={description} height="150" />
                </div>
                <div className={bs.banner__content}>
                    <h1>Shop the new Signature Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                    <Button text="shop now" classes="primary" />
                </div>
            </FlexBox>
        </div>
    );
}

export default BannerSlider;


