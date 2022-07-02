import Image from "../Image/Image";
import r from './rating.module.scss';

const Ratings = ({ ratings }) => {
    return (
        ratings && ratings.map((item) => {
            return (<>
                <div className={r.rating}>
                    <div classes={r.rating__star}>
                        <Image name="star.svg" />
                        <Image name="star.svg" />
                        <Image name="star.svg" />
                        <Image name="star.svg" />
                    </div>
                    <span className={r.rating__number}>({item.brand})</span>
                </div>
            </>)
        })
    );
}

export default Ratings;
