import cn from 'classnames';
import SecondaryTitle from "../Headings/SecondaryTitle/SecondaryTitle";
import Lead from '../Lead/Lead';
import TextContent from "../TextContent/TextContent";

import m from './media.module.scss';

const Media = ({ img, imgDesc, imgHeight, title, content, children, size }) => {
    return (
        <div className={cn(m.media, size ? { [m[`media--${size}`]]: size } : '')}>
            <div className={cn([m["media-object"]])}>
                <img src={img} alt={imgDesc} height={imgHeight} />
            </div>
            <div className={cn([m["media-content"]])}>
                <Lead text={title} />
                <TextContent content={content} />
                {children}
            </div>
        </div>
    );
}

export default Media;