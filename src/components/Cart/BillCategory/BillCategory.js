import bc from './billCategory.module.scss';

const BillCategory = ({ category, amount }) => {
    return (
        <div className={bc.bill__category}>
            <span>{category}</span>
            <span>{amount}</span>
        </div>
    );
}

export default BillCategory;