import React from 'react';
import Filter from 'react-feather/dist/icons/filter';
import Trash2 from 'react-feather/dist/icons/trash-2';
import { Wrapper } from './style';
import Button from '../../../../components/shared/button';

const FilterButtons = ({ showReset, handleResetFilter, handleCollapse }) => {
    return (
        <Wrapper>
            <Button onClick={handleCollapse} type="button" label="Filters">
                <Filter size={18} />
            </Button>
            {showReset && (
                <Button
                    type="button"
                    onClick={handleResetFilter}
                    label="Reset Filters"
                >
                    <Trash2 size={18} />
                </Button>
            )}
        </Wrapper>
    );
};

export default React.memo(FilterButtons);
