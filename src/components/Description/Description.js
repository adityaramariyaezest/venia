const Description = ({ content, classes }) => {
    return (
        <p className={classes ? classes : ''}>{content}</p>
    );
}

export default Description;