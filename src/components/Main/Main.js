/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */

import React, { Component } from 'react';
import { Container, Filter, Filters, Table } from './style';
import yokaisJson from '../../yokais';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tribe: [],
            rank: [],
            attribute: [],
            yokais: yokaisJson
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(event) {
        const checkboxtype = event.target.getAttribute('checkboxtype');

        this.filterResults(
            checkboxtype,
            event.target.name,
            event.target.checked
        );
    }

    filterResults(checkboxtype, filterRank, checked) {
        const { yokais } = this.state;
        const type = this.state[checkboxtype];

        console.log(type);
        if (checked) {
            type.push(filterRank);
        } else {
            type.splice(type.indexOf(filterRank), 1);
        }

        const filteredYokais = yokais.filter(yokai => {
            console.log(yokai[checkboxtype]);
            return type.includes(yokai[checkboxtype].toLowerCase());
        });

        console.log(filteredYokais);

        /*
        this.setState({
            ranks: type,
            yokais: filteredYokais.length === 0 ? yokaisJson : filteredYokais
        });
        */
    }

    render() {
        const { tribe, rank, attribute, yokais } = this.state;
        const tribesCheckbox = [
            'Brave',
            'Charming',
            'Eerie',
            'Heartful',
            'Mysterious',
            'Tough',
            'Slippery',
            'Shady',
            'Wicked'
        ];
        const ranksCheckbox = ['A', 'B', 'C', 'D', 'E'];
        const attributesCheckbox = [
            'Fire',
            'Water',
            'Lightning',
            'Earth',
            'Ice',
            'Wind',
            'Drain',
            'Restoration'
        ];

        return (
            <Container>
                <form>
                    <div>
                        <h5>Filters:</h5>
                    </div>
                    <Filters>
                        <Filter>
                            <h5>Tribes</h5>
                            {tribesCheckbox.map(type => (
                                <div key={type}>
                                    <input
                                        type="checkbox"
                                        checked={tribe.includes(type)}
                                        name={type}
                                        checkboxtype="tribe"
                                        onChange={this.handleCheckbox}
                                    />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </Filter>
                        <Filter>
                            <h5>Ranks</h5>
                            {ranksCheckbox.map(type => (
                                <div key={type}>
                                    <input
                                        type="checkbox"
                                        checked={rank.includes(type)}
                                        name={type}
                                        checkboxtype="rank"
                                        onChange={this.handleCheckbox}
                                    />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </Filter>
                        <Filter>
                            <h5>Attribute</h5>
                            {attributesCheckbox.map(type => (
                                <div key={type}>
                                    <input
                                        type="checkbox"
                                        checked={attribute.includes(type)}
                                        name={type}
                                        checkboxtype="attribute"
                                        onChange={this.handleCheckbox}
                                    />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </Filter>
                    </Filters>
                    <label htmlFor="name">Search by name:</label>
                    <input type="text" id="name" name="name" required />
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Tribe</th>
                                <th>Rank</th>
                                <th>Attribute</th>
                            </tr>
                        </thead>
                        <tbody>
                            {yokais.map(yokai => (
                                <tr key={yokai.name}>
                                    <td>{yokai.name}</td>
                                    <td>{yokai.tribe}</td>
                                    <td>{yokai.rank}</td>
                                    <td>{yokai.attribute}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </form>
            </Container>
        );
    }
}

export default Main;
