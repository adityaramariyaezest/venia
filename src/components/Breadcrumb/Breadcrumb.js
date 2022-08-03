import cn from 'classnames';
import b from "./breadcrumb.module.scss";

const breadcrumbLinks = [
    {
        id: "clothing__101",
        link: "clothing",
        to: "/clothing",
    },

    {
        id: "women__101",
        link: "women's",
        to: "/wommen",
    },

    {
        id: "outwear__101",
        link: "outwear",
        to: "/outwear",
    },
];

const Breadcrumb = () => {
    return (
        <nav
            aria-labelledby="breadcrumblabel"
            className={b.breadcrumb}
        >
            <h2 id="breadcrumblabel" className="nav_visuallyHidden__mcxkJ">
                breadcrumb
            </h2>
            <ul className={cn(`${b.breadcrumb__list}`)}>
                <li className={cn(`${b.breadcrumb__list__item}`)}>
                    <a href="#/clothing">clothing</a>
                </li>
                <li className={cn(`${b.breadcrumb__list__item}`)}>
                    <a href="#/wommen">women's</a>
                </li>
                <li className={cn(`${b.breadcrumb__list__item}`)}>
                    <a href="#/outwear">outwear</a>
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumb;
