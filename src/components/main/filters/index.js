import React, { useState } from 'react';
import Plus from 'react-feather/dist/icons/plus';
import {
    FiltersWrapper,
    InputContainer,
    Collapsible,
    SpecialHeader,
    Column,
    CollapsibleFilters,
} from './style';
import FilterButtons from './filter-buttons';
import Checkbox from '../../shared/checkbox';
import {
    elements as elementsFilters,
    ranks as ranksfilters,
    tribes as tribesFilters,
    misc as miscFilters,
    types as typesFilters,
} from '../../../mocks/filters';

const Filters = ({
    tribe,
    rank,
    element,
    types,
    misc,
    handleResetFilter,
    handleCheckbox,
}) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [isCollapsedFilterTribes, setCollapsedFilterTribes] = useState(true);
    const [isCollapsedFilterRanks, setCollapsedFilterRanks] = useState(true);
    const [isCollapsedFilterElements, setCollapsedFilterElements] = useState(
        true
    );
    const [isCollapsedFilterTypes, setCollapsedFilterTypes] = useState(true);
    const [isCollapsedFilterMisc, setCollapsedFilterMisc] = useState(true);

    // Validate how to prevent this
    const handleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    const handleCollapseFilterTribes = () => {
        setCollapsedFilterTribes(!isCollapsedFilterTribes);
    };
    const handleCollapseFilterRanks = () => {
        setCollapsedFilterRanks(!isCollapsedFilterRanks);
    };
    const handleCollapseFilterElements = () => {
        setCollapsedFilterElements(!isCollapsedFilterElements);
    };
    const handleCollapseFilterTypes = () => {
        setCollapsedFilterTypes(!isCollapsedFilterTypes);
    };
    const handleCollapseFilterMisc = () => {
        setCollapsedFilterMisc(!isCollapsedFilterMisc);
    };

    return (
        <Collapsible isCollapsed={isCollapsed}>
            <FilterButtons
                showReset={
                    tribe.length > 0 ||
                    rank.length > 0 ||
                    element.length > 0 ||
                    types.length > 0 ||
                    misc.length > 0
                }
                handleResetFilter={handleResetFilter}
                handleCollapse={handleCollapse}
            />
            <FiltersWrapper>
                <Column>
                    <SpecialHeader onClick={handleCollapseFilterTribes}>
                        <h2>Tribes</h2>
                        <Plus />
                    </SpecialHeader>
                    <CollapsibleFilters
                        isCollapsed={isCollapsedFilterTribes}
                        checkboxtype="tribe"
                    >
                        {tribesFilters.map((type) => (
                            <InputContainer key={type}>
                                <label>
                                    <Checkbox
                                        type="checkbox"
                                        checked={tribe.includes(
                                            type.toLowerCase()
                                        )}
                                        name={type}
                                        checkboxtype="tribe"
                                        onChange={handleCheckbox}
                                        label={type}
                                    />
                                </label>
                            </InputContainer>
                        ))}
                    </CollapsibleFilters>
                </Column>
                <Column>
                    <SpecialHeader onClick={handleCollapseFilterRanks}>
                        <h2>Ranks</h2>
                        <Plus />
                    </SpecialHeader>
                    <CollapsibleFilters
                        isCollapsed={isCollapsedFilterRanks}
                        isToWrap
                    >
                        {ranksfilters.map((type) => (
                            <InputContainer key={type}>
                                <label>
                                    <Checkbox
                                        type="checkbox"
                                        checked={rank.includes(
                                            type.toLowerCase()
                                        )}
                                        name={type}
                                        checkboxtype="rank"
                                        onChange={handleCheckbox}
                                        label={type}
                                    />
                                </label>
                            </InputContainer>
                        ))}
                    </CollapsibleFilters>
                </Column>
                <Column>
                    <SpecialHeader onClick={handleCollapseFilterElements}>
                        <h2>Elements</h2>
                        <Plus />
                    </SpecialHeader>
                    <CollapsibleFilters isCollapsed={isCollapsedFilterElements}>
                        {elementsFilters.map((type) => (
                            <InputContainer key={type}>
                                <label>
                                    <Checkbox
                                        type="checkbox"
                                        checked={element.includes(
                                            type.toLowerCase()
                                        )}
                                        name={type}
                                        checkboxtype="element"
                                        onChange={handleCheckbox}
                                        label={type}
                                    />
                                </label>
                            </InputContainer>
                        ))}
                    </CollapsibleFilters>
                </Column>
                <Column>
                    <SpecialHeader onClick={handleCollapseFilterTypes}>
                        <h2>Types</h2>
                        <Plus />
                    </SpecialHeader>
                    <CollapsibleFilters isCollapsed={isCollapsedFilterTypes}>
                        {typesFilters.map((el) => (
                            <InputContainer key={el}>
                                <label>
                                    <Checkbox
                                        type="checkbox"
                                        checked={types.includes(
                                            el.toLowerCase()
                                        )}
                                        name={el}
                                        checkboxtype="types"
                                        onChange={handleCheckbox}
                                        label={el}
                                    />
                                </label>
                            </InputContainer>
                        ))}
                    </CollapsibleFilters>
                </Column>
                <Column>
                    <SpecialHeader onClick={handleCollapseFilterMisc}>
                        <h2>Misc</h2>
                        <Plus />
                    </SpecialHeader>
                    <CollapsibleFilters isCollapsed={isCollapsedFilterMisc}>
                        {miscFilters.map((type) => (
                            <InputContainer key={type}>
                                <label>
                                    <Checkbox
                                        type="checkbox"
                                        checked={misc.includes(
                                            type.toLowerCase()
                                        )}
                                        name={type}
                                        checkboxtype="misc"
                                        onChange={handleCheckbox}
                                        label={type}
                                    />
                                </label>
                            </InputContainer>
                        ))}
                    </CollapsibleFilters>
                </Column>
            </FiltersWrapper>
        </Collapsible>
    );
};

export default Filters;
