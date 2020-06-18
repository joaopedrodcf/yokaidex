/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Form } from './style';
import Filters from '../components/main/filters';
import Search from '../components/main/search';
import List from '../components/main/list';
import { GameVersionContext, YokaisContext } from '../store';
import Global from '../styles';
import withTracker from '../components/shared/with-tracker';

const Main = () => {
    const { gameVersion } = useContext(GameVersionContext);
    const {
        yokais,
        tribe,
        rank,
        element,
        misc,
        types,
        name,
        handleResetFilter,
        handleCheckbox,
        handleText,
    } = useContext(YokaisContext);

    const handleSubmit = (event) => {
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
                <Search name={name} handleText={handleText} />
                <Filters
                    tribe={tribe}
                    rank={rank}
                    element={element}
                    types={types}
                    misc={misc}
                    handleResetFilter={handleResetFilter}
                    handleCheckbox={handleCheckbox}
                />
                <List gameVersion={gameVersion} yokais={yokais} />
            </Form>
        </Global.Container>
    );
};

export default withTracker(Main);
