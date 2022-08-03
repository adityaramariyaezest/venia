import cn from 'classnames';
import { EditIcon2 } from '../Icons/Icons';
import LinkWithIcon from '../Links/LinkWithIcon'
import Description from '../Description/Description';
import FlexBox from '../Layout/Flexbox';
import FlexItem from '../Layout/FlexItem/FLexItem';

import th from './table.module.scss';

export const TableHeader = ({ heading, controls }) => {
    return (
        <div className={th.table__header}>
            <FlexBox classes="d-flex d-flex__justify__content__between">
                <FlexItem>
                    <Description content={heading} />
                </FlexItem>
                {!controls ? <FlexItem>
                    <LinkWithIcon linkIcon={EditIcon2} linkText="Edit" svgMode="dark" />
                </FlexItem> : null}
            </FlexBox>
        </div>
    );
}


export const TableBody = ({ children, size }) => {
    return (
        <div className={cn(th['table__body'], size ? { [th[`table__body--${size}`]]: size } : '')}>
            {children}
        </div>
    );
}


export const Table = ({ heading, controls, size, children }) => {
    return (
        <>
            <TableHeader heading={heading} controls={controls} />
            {children ? <TableBody children={children} size={size ? size : ''} /> : null}
        </>
    );
}

