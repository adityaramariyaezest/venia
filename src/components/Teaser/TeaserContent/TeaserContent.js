import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import tc from './teaserContent.module.scss';
const TeaserContent = ({ title, secondaryTitle, desc }) => {
    return (
        <div className={tc.wrapper}>
            <h1>{title}</h1>
            <p className={tc.lead}>{secondaryTitle}</p>
            <p>{desc}</p>

            <ButtonGroup>
                <Button text="shop collection" classes="primary" />
                <Button text="shop now" classes="primary" />
            </ButtonGroup>
        </div>
    );
}

export default TeaserContent;