import tc from './teaserContent.module.scss';

const TeaserContent = ({ children, classes }) => {
    return (
        <div className={`${tc.wrapper} ${classes}`}>
            {children}
        </div>
    );
}

export default TeaserContent;