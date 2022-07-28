const Wrapper = ({ children, phone, tablet, desktop, classes }) => {
    return (
        <div className={`aem-GridColumn aem-GridColumn--phone--${phone} aem-GridColumn aem-GridColumn--tablet--${tablet} aem-GridColumn aem-GridColumn--default--${desktop} ${classes ? classes : ''}`}>
            {children}
        </div>
    );
}
export default Wrapper;