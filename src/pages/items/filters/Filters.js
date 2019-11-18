import React from 'react';
import { Wrapper, WrapperCheckbox } from './style';
import Checkbox from '../../../components/shared/checkbox';
import { items as itemsFilters } from '../../../mocks/filters';

const Filters = ({ selectedFilterItems, handleCheckbox }) => {
    return (
        <Wrapper>
            {itemsFilters.map((item, index) => (
                <WrapperCheckbox key={index}>
                    <label>
                        <Checkbox
                            type="checkbox"
                            checked={selectedFilterItems.includes(
                                item.toLowerCase()
                            )}
                            name={item}
                            onChange={handleCheckbox}
                            label={item}
                        />
                    </label>
                </WrapperCheckbox>
            ))}
        </Wrapper>
    );
};

export default React.memo(Filters);
