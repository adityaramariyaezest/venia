import { EditIcon2 } from '../Icons/Icons';
import LinkWithIcon from '../Links/LinkWithIcon'
import Description from '../Description/Description';
import FlexBox from '../Layout/Flexbox';
import FlexItem from '../Layout/FlexItem/FLexItem';
import FancyBorder from '../FancyBorder/FancyBorder';

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


export const TableBody = ({ children }) => {
    return (
        <div className={th.table__body}>
            {children}
        </div>
    );
}



export const Table = ({ heading, controls, children }) => {
    return (
        <FancyBorder>
            <TableHeader heading={heading} controls={controls} />
            {children ? <TableBody children={children} /> : null}
        </FancyBorder>
    );
}

