import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Card from './components/Card';
import Main from './components/Main';
import yokaisJson from './mocks/yokais';

class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yokais: yokaisJson
        };
    }

    getYokai(name) {
        const { yokais } = this.state;

        if (name.includes('_boss')) {
            return yokais.find(
                yokai =>
                    yokai.name === name.replace('_boss', '') &&
                    yokai.tribe === 'boss'
            );
        }

        return yokais.find(yokai => yokai.name === name);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route
                    exact
                    path="/yokai/:name"
                    render={props => (
                        <Card {...this.getYokai(props.match.params.name)} />
                    )}
                />
            </Switch>
        );
    }
}

export default Routes;
