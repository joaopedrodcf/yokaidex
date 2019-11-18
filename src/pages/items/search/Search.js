import React from 'react';
import FeaterSearch from 'react-feather/dist/icons/search';
import Input from '../../../components/shared/input';

const Search = ({ name, handleText }) => {
    return (
        <Input
            id="name"
            name="name"
            value={name}
            onChange={handleText}
            placeholder="Find your item by name"
        >
            <FeaterSearch />
        </Input>
    );
};

export default React.memo(Search);
