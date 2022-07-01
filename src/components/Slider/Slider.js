import slider from './slider.module.scss';

const Slider = () => {
    return (
        <div className={slider.slider}>
            <div className={slider.slider__thumbnail}>
                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src='' />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src='' />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src='' />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src='' />
                </div>

                <div className={slider.slider__thumbnail__item}>
                    <img className={slider.slider__thumbnail__img} src='' />
                </div>
            </div>   

           <div className={slider.slider__main}>
                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src='' />
                </div> 

                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src='' />
                </div>   

                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src='' />
                </div>  

                <div className={slider.slider__main__item}>
                    <img className={slider.slider__img} src='' />
                </div>  
            </div>                   
        </div>
    );
}

export default Slider;