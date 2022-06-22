const Wrapper = ({ children, phone, tablet, desktop }) => {
    return (
        <div className={`aem-GridColumn aem-GridColumn--phone--${phone} aem-GridColumn aem-GridColumn--tablet--${tablet} aem-GridColumn aem-GridColumn--default--${desktop}`}>
            {children}
        </div>
    );
}
export default Wrapper;