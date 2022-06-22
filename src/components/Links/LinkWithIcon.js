const LinkWithIcon = ({linkText}) => {
    return ( 
        <a href="/login" className="link">
            <span className="link-icon"></span>
            <span>{linkText}</span>
        </a>
     );
}
 
export default LinkWithIcon;