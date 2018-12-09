import React from 'react';
import { Container, Filter, Filters, Table } from './style';
import yokais from '../../yokais';

const Main = () => (
    <Container>
        <form>
            <div>
                <h5>Filters:</h5>
            </div>
            <Filters>
                <Filter>
                    <h5>Tribes</h5>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Brave</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Charming</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Eerie</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Heartful</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Mysterious</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Tough</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Slippery</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Shady</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Wicked</label>
                    </div>
                </Filter>
                <Filter>
                    <h5>Ranks</h5>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">A</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">B</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">C</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">D</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">E</label>
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
                    </div>{' '}
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="scales">Restoration</label>
                    </div>
                </Filter>
            </Filters>
            <div>
                <div>
                    <input type="text" />
                    <Table>
                        <tr>
                            <th>Name</th>
                            <th>Tribe</th>
                            <th>Rank</th>
                            <th>Attribute</th>
                        </tr>
                        {yokais.map(yokai => (
                            <tr>
                                <td>{yokai.name}</td>
                                <td>{yokai.tribe}</td>
                                <td>{yokai.rank}</td>
                                <td>{yokai.attribute}</td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </div>
        </form>
    </Container>
);

export default Main;
