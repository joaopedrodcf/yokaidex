import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Card from './components/Card';
import Main from './components/Main';
import yokaisJsonVersion2 from './mocks/yokais';
import yokaisJsonVersion1 from './mocks/yokai-watch-1/yokais';

const getYokai = (name, version) => {
    let yokais;
    if (version === 1) {
        yokais = yokaisJsonVersion1;
    } else if (version === 2) {
        yokais = yokaisJsonVersion2;
    } else {
        yokais = yokaisJsonVersion1;
    }

    if (name.includes('_boss')) {
        return yokais.find(
            yokai =>
                yokai.name === name.replace('_boss', '') &&
                yokai.tribe === 'boss'
        );
    }

    return yokais.find(yokai => yokai.name === name);
};

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route
            exact
            path="/yokai/:name"
            render={props => <Card {...getYokai(props.match.params.name, 2)} />}
        />
    </Switch>
);

export default Routes;
