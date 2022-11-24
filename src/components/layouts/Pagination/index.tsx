import React from 'react';
import PropTypes from 'prop-types';

PaginationPage.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

PaginationPage.defaultProps = {
    onPageChange: null,
};

function PaginationPage(props: any) {
    const { pagination, onPageChange } = props;
    const { page, limit, totalRows } = pagination;
    const totalPages = Math.ceil(totalRows / limit);

    function handlePageChange(newPage: number) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div>
            <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
                Prev
            </button>
            <button disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>
                Next
            </button>
        </div>
    );
}

export default PaginationPage;
