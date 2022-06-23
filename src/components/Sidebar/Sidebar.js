import './sidebar.scss';

const Sidebar = (props) => {
    return (
        <aside>
            {props.children}
        </aside>
    );
}

export default Sidebar;