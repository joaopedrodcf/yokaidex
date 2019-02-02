import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Card from './components/Card';
import Main from './components/Main';
import VersionSelect from './components/version-select';
import yokaisGame1 from './mocks/yokai-watch-1/yokais';
import yokaisGame2 from './mocks/yokai-watch-2/yokais';
import yokaisGame3 from './mocks/yokai-watch-3/yokais';

const getYokai = (name, version) => {
    let yokais;
    switch (version) {
        case '1':
            yokais = yokaisGame1;
            break;
        case '2':
            yokais = yokaisGame2;
            break;
        default:
            yokais = yokaisGame3;
            break;
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

const Routes = ({ gameVersion, changeGameVersion }) => (
    <Switch>
        <Route
            exact
            path="/home"
            render={() => <Main gameVersion={gameVersion} />}
        />
        <Route
            exact
            path="/"
            render={() => (
                <VersionSelect changeGameVersion={changeGameVersion} />
            )}
        />
        <Route
            exact
            path="/yokai/:name"
            render={props => (
                <Card {...getYokai(props.match.params.name, gameVersion)} />
            )}
        />
    </Switch>
);

export default Routes;
