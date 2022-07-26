import { ChevronDownIcon } from "../Icons/Icons";
import acc from './accordion.module.scss';

const Accordion = ({ accordionItem }) => {
    const { key, value } = accordionItem;
    return (
        <div className={acc.accordion}>
            <div className={acc.accordion__left}>{key}</div>
            <div className={acc.accordion__right}>{value}</div>
            <ChevronDownIcon />
        </div>
    );
}

export default Accordion;

