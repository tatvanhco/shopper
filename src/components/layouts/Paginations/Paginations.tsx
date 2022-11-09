import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationSize = () => {
    return (
        <div className="float-right">
            <Stack spacing={2}>
                <Pagination count={6} />
            </Stack>
        </div>
    );
};
