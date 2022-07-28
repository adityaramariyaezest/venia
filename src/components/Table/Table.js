import { EditIcon2 } from '../Icons/Icons';
import LinkWithIcon from '../Links/LinkWithIcon'
import Description from '../Description/Description';
import FlexBox from '../Layout/Flexbox';
import FlexItem from '../Layout/FlexItem/FLexItem';
import FancyBorder from '../FancyBorder/FancyBorder';
import TextContent from '../TextContent/TextContent';
import th from './table.module.scss';

export const TableHeader = ({ heading }) => {
    return (
        <div className={th.table__header}>
            <FlexBox classes="d-flex d-flex__justify__content__between">
                <FlexItem>
                    <Description content={heading} />
                </FlexItem>
                <FlexItem>
                    <LinkWithIcon linkIcon={EditIcon2} linkText="Edit" svgMode="dark" />
                </FlexItem>
            </FlexBox>
        </div>
    );
}


export const TableBody = ({ email, phone, country, name, address, city, state, pin }) => {
    return (
        <div className={th.table__body}>
            <FlexBox>
                <FlexItem>
                    <TextContent content={email} />
                    <TextContent content={phone} />
                </FlexItem>
                <FlexItem>
                    <TextContent content={name} />
                    <TextContent content={address} />
                    <TextContent content={city} />
                    <TextContent content={country} />
                </FlexItem>
            </FlexBox>
        </div>
    );
}



export const Table = ({ heading, email, phone, country, name, address, city, state, pin }) => {
    return (
        <FancyBorder>
            <TableHeader heading={heading} />
            <TableBody email={email} phone={phone} name={name} address={address} city={city} country={country} />
        </FancyBorder>
    );
}

