/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Form } from './style';
import Search from './search';
import Filters from './filters';
import List from './list';
import { GameVersionContext, ItemsContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const Items = () => {
    const { gameVersion } = useContext(GameVersionContext);
    const {
        name,
        handleText,
        selectedFilterItems,
        handleCheckbox,
        items,
    } = useContext(ItemsContext);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Global.Container>
            <Helmet>
                <title>
                    Items | Yokaidex - Where you can find all the information
                    from Yo-kai Watch games!
                </title>
                <meta
                    name="description"
                    content={`Items that can be collected in Yo-kai Watch ${gameVersion}`}
                />
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Search name={name} handleText={handleText} />
                <Filters
                    selectedFilterItems={selectedFilterItems}
                    handleCheckbox={handleCheckbox}
                />
                <List gameVersion={gameVersion} items={items} />
            </Form>
        </Global.Container>
    );
};

export default withTracker(Items);
