import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Collapsible, Filters, InputContainer } from './style';
import Button from '../../shared/button';
import { Elements, Ranks, TribesName } from '../../shared/variables/Yokais';

const Filter = props => {
    const { handleCollapse, handleCheckbox, propsVars } = props;
    const { isCollapsed, tribe, rank, element } = propsVars;

    return (
        <Filters>
            <Collapsible isCollapsed={isCollapsed}>
                <Button onClick={handleCollapse} type="button" label="Tribes">
                    <FontAwesomeIcon
                        icon={isCollapsed ? 'chevron-down' : 'chevron-up'}
                    />
                </Button>
                {TribesName.map(type => (
                    <InputContainer key={type}>
                        <input
                            type="checkbox"
                            checked={tribe.includes(type.toLowerCase())}
                            name={type}
                            checkboxtype="tribe"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor={type}>{type}</label>
                    </InputContainer>
                ))}
            </Collapsible>
            <Collapsible isCollapsed={isCollapsed}>
                <Button onClick={handleCollapse} type="button" label="Ranks">
                    <FontAwesomeIcon
                        icon={isCollapsed ? 'chevron-down' : 'chevron-up'}
                    />
                </Button>
                {Ranks.map(type => (
                    <InputContainer key={type}>
                        <input
                            type="checkbox"
                            checked={rank.includes(type.toLowerCase())}
                            name={type}
                            checkboxtype="rank"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor={type}>{type}</label>
                    </InputContainer>
                ))}
            </Collapsible>
            <Collapsible isCollapsed={isCollapsed}>
                <Button
                    onClick={handleCollapse}
                    type="button"
                    label="Attributes"
                >
                    <FontAwesomeIcon
                        icon={isCollapsed ? 'chevron-down' : 'chevron-up'}
                    />
                </Button>
                {Elements.map(type => (
                    <InputContainer key={type}>
                        <input
                            type="checkbox"
                            checked={element.includes(type.toLowerCase())}
                            name={type}
                            checkboxtype="element"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor={type}>{type}</label>
                    </InputContainer>
                ))}
            </Collapsible>
        </Filters>
    );
};

export default Filter;
