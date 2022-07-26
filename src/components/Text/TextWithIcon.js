import React from 'react';
import t from './textWithIcon.module.scss';

import * as Icons from '../Icons/Icons';

const Icon = props => {
    const { iconName } = props;
    const icon = React.createElement(Icons[iconName]);
    return <>{icon}</>;
};

const TextWithIcon = ({ icon, text }) => {
    return (
        <div className={t.text}>
            <Icon iconName={icon} />
            <span>{text}</span>
        </div>
    );
}

export default TextWithIcon;