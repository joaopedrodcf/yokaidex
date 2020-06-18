import React from 'react';
import FeaterSearch from 'react-feather/dist/icons/search';
import Input from '../../shared/input';

const Search = ({ name, handleText }) => {
    return (
        <Input
            id="name"
            name="name"
            value={name}
            onChange={handleText}
            placeholder="Find your yokai by name"
            aria-label="Find your yokai by name"
        >
            <FeaterSearch />
        </Input>
    );
};

export default React.memo(Search);
