import { Link } from "react-router-dom";

const Nav = ({ links, label, labelContent, classes }) => {
    const GenerateList = ({ lists }) => {
        return lists && lists.map((listItem, index) => {
            return (
                <li key={index} className={`${classes}-item`}>
                    <Link to={listItem.to}>{listItem.link}</Link>
                </li>
            )
        })
    }

    return (
        <nav aria-labelledby={label} className={classes}>
            <h2 id={label} className="visuallyHidden">{labelContent}</h2>
            <ul className={`${classes}-list`}>
                <GenerateList lists={links} classes={classes} />
            </ul>
        </nav>
    );
}

export default Nav;