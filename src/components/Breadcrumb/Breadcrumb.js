
import Nav from "../Nav/Nav";
import './breadcrumb.scss';

const breadcrumb = [
    {
        id: 'clothing__101',
        link: 'clothing',
        to: '/clothing'
    },

    {
        id: 'women__101',
        link: "women's",
        to: '/wommen'
    },

    {
        id: 'outwear__101',
        link: 'outwear',
        to: '/outwear'
    }
]

const Breadcrumb = () => {
    return (
        <Nav classes="breadcrumb" links={breadcrumb} label="breadcrumblabel" labelContent="breadcrumb" />
    );
}

export default Breadcrumb;