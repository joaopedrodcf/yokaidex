/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Form } from './style';
import List from './list';
import Search from './search';
import Filters from './filters';
import { withGameVersionContext, withYokaisContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const Main = ({ context }) => {
    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <Global.Container>
            <Helmet>
                <title>
                    Yokaidex Where you can find all the information from Yo-kai
                    Watch games!
                </title>
                <meta
                    name="description"
                    content="Contains all yo-kais for Yo-kai Watch, their locations, stats, favorite foods, skills and evolutions."
                />
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Search name={context.name} handleText={context.handleText} />
                <Filters
                    tribe={context.tribe}
                    rank={context.rank}
                    element={context.element}
                    types={context.types}
                    misc={context.misc}
                    handleResetFilter={context.handleResetFilter}
                    handleCheckbox={context.handleCheckbox}
                />
                <List
                    gameVersion={context.gameVersion}
                    yokais={context.yokais}
                />
            </Form>
        </Global.Container>
    );
};

export default withRouter(
    withGameVersionContext(withYokaisContext(withTracker(Main)))
);
