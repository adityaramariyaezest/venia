import cn from 'classnames';

import f from './form.module.scss';

const Form = ({ children, classes }) => {
    return (
        <form className={cn(f.form, classes ? { [f[`form--${classes}`]]: classes } : '')}>
            {children}
        </form>
    );
}

export default Form;