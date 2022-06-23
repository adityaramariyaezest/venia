const Image = ({ name, alt }) => {
    return (
        <img className="pure-img-responsive" src={`${process.env.PUBLIC_URL}/images/${name}`} alt={alt} />
    );
}

export default Image;