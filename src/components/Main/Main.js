import React, { Component } from 'react';
import { Container, Filter, Filters, Table } from './style';
import yokaisJson from '../../yokais';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tribes: [],
            ranks: [],
            yokais: yokaisJson
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(event) {
        this.filterResults(event.target.name, event.target.checked);
    }

    filterResults(filterRank, checked) {
        const { ranks, yokais } = this.state;

        if (checked) {
            ranks.push(filterRank);
        } else {
            ranks.splice(ranks.indexOf(filterRank), 1);
        }

        const filteredYokais = yokais.filter(yokai =>
            ranks.includes(yokai.rank.toLowerCase())
        );

        this.setState({
            ranks,
            yokais: filteredYokais.length === 0 ? yokaisJson : filteredYokais
        });
    }

    render() {
        const { tribes, ranks, yokais } = this.state;
        return (
            <Container>
                <form>
                    <div>
                        <h5>Filters:</h5>
                    </div>
                    <Filters>
                        <Filter>
                            <h5>Tribes</h5>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('brave')}
                                    name="brave"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="brave">Brave</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('charming')}
                                    name="charming"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="charming">Charming</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('eerie')}
                                    name="eerie"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="eerie">Eerie</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('heartful')}
                                    name="heartful"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="heartful">Heartful</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('mysterious')}
                                    name="mysterious"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="mysterious">Mysterious</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('tough')}
                                    name="tough"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="tough">Tough</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('slippery')}
                                    name="slippery"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="slippery">Slippery</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('shady')}
                                    name="shady"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="shady">Shady</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={tribes.includes('wicked')}
                                    name="wicked"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="wicked">Wicked</label>
                            </div>
                        </Filter>
                        <Filter>
                            <h5>Ranks</h5>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={ranks.includes('a')}
                                    name="a"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="a">A</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={ranks.includes('b')}
                                    name="b"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="b">B</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={ranks.includes('c')}
                                    name="c"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="c">C</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={ranks.includes('d')}
                                    name="d"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="d">D</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={ranks.includes('e')}
                                    name="e"
                                    onChange={this.handleCheckbox}
                                />
                                <label htmlFor="e">E</label>
                            </div>
                        </Filter>
                        <Filter>
                            <h5>Attribute</h5>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Fire</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Water</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Lightning</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Earth</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Ice</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Wind</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Drain</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="scales">Restoration</label>
                            </div>
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
