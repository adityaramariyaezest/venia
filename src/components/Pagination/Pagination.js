import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../utils/usePagination';
import Image from '../Image/Image';
import p from './pagination.module.scss';
const Pagination = props => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames(p.pagination__container, { [className]: className })}
        >
            <li
                className={classnames(p.pagination__item, {
                    hide: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <Image name="chevron-left.svg" alt="pagination-previous" />

            </li>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <li key={index} className={`${p.pagination__item} ${p.pagination__dots}`}>&#8230;</li>;
                }


                return (
                    <li
                        className={classnames(p.pagination__item, {
                            active: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames(p.pagination__item, {
                    hide: currentPage === lastPage
                })}
                onClick={onNext}
            >

                <Image name="chevron-right.svg" alt="pagination-next" />

            </li>
        </ul>
    );
};

export default Pagination;