import cn from 'classnames';
import slider from './slider.module.scss';

export const SliderDots = () => {
    return (
        <ul className={slider.slider_dots}>
            <li className={cn(slider.slider_dots_item)}></li>
            <li className={cn(slider.slider_dots_item)}></li>
            <li className={cn(slider.slider_dots_item)}></li>
            <li className={cn(slider.slider_dots_item)}></li>
            <li className={cn(slider.slider_dots_item)}></li>
        </ul>
    );
}


const Slider = ({ image }) => {
    return (
        <div className={slider.slider}>
            <div className={slider.slider__thumbnail}>
                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src={image} />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src={image} />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src={image} />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src={image} />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src={image} />
                </div>
            </div>

            <div className={slider.slider__main}>
                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src={image} />
                </div>

                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src={image} />
                </div>

                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src={image} />
                </div>

                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src={image} />
                </div>
            </div>
            <SliderDots />
        </div>
    );
}

export default Slider;