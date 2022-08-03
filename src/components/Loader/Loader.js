import Image from '../Image/Image';
import { LoaderIcon } from '../Icons/Icons';
import l from './loader.module.scss';


const Loader = () => {
    return (
        <div className={l.loader}>
            <LoaderIcon />
        </div>
    );
}
export default Loader;