/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Form } from './style';
import Search from './search';
import Filters from './filters';
import List from './list';
import { withGameVersionContext, withItemsContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const Items = ({ context }) => {
    const handleSubmit = event => {
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
                    content={`Items that can be collected in Yo-kai Watch ${context.gameVersion}`}
                />
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Search name={context.name} handleText={context.handleText} />
                <Filters
                    selectedFilterItems={context.selectedFilterItems}
                    handleCheckbox={context.handleCheckbox}
                />
                <List gameVersion={context.gameVersion} items={context.items} />
            </Form>
        </Global.Container>
    );
};

export default withGameVersionContext(withItemsContext(withTracker(Items)));
