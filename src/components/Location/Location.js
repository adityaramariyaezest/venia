import Image from "../Image/Image";

import l from './location.module.scss';

export const Location = () => {
    return (
        <div className={l.wrapper}>
            <Image name="map-pin.svg" />
        </div>
    )
}

