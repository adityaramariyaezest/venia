import l from './lead.module.scss';

const Lead = ({ text, classes }) => <p className={`${l.lead} ${classes ? classes : ''}`}>{text}</p>

export default Lead;