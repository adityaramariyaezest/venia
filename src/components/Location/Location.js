import { MapPinIcon } from '../Icons/Icons';
import l from './location.module.scss';

export const Location = () => {
    return (
        <div className={l.wrapper}>
            <MapPinIcon mode="light" />
        </div>
    )
}

