
const Nav = ({ links, label, labelContent, classes }) => {
    const GenerateList = ({ lists }) => {
        return lists && lists.map(listItem => {
            return (
                <li className={`${classes}-item`}><a href={listItem.to}>{listItem.link}</a></li>
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