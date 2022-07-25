import Image from '../Image/Image';
import l from './loader.module.scss';

const Loader = () => {
    return (
        <div className={l.loader}>
            <Image name="loader.svg" />
            <p>loading...</p>
        </div>
    );
}
export default Loader;