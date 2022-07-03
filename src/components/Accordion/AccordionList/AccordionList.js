
import Accordion from '../Accordion';
import accL from './accordionList.module.scss';

const AccordionList = ({ accordionItems }) => {
    return (
        <div className={accL.accordion__list}>
            {
                accordionItems && accordionItems.map((item) => <Accordion accordionItem={item} />)
            }
        </div>
    );
}

export default AccordionList;