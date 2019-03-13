/* eslint-disable react/destructuring-assignment */ import React, {
    Component
} from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Container, Table, Row } from './style';
import Image from '../shared/image';

class BaffleBoard extends Component {
    goTo(name, tribe = '') {
        const { gameVersion } = this.props;
        let nameUrl = name;
        if (tribe === 'boss') nameUrl += `_${tribe}`;

        this.props.history.push(
            `/yokai-watch-${gameVersion}/yokais/${nameUrl}`
        );
    }

    render() {
        const { baffleBoard, gameVersion } = this.props;
        return (
            <>
                <Helmet>
                    <title>
                        Baffle board | Yokaidex - Where you can find all the
                        information from Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content={`Baffle board is quiz that unlocks special features in Yo-kai Watch ${gameVersion}`}
                    />
                </Helmet>
                {baffleBoard && (
                    <Container>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th>Effect</th>
                                    <th>Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {baffleBoard.map((row, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => this.goTo(row.solution)}
                                    >
                                        <td>{row.location}</td>
                                        <td>{row.effect}</td>
                                        <td>
                                            <Row>
                                                <Image
                                                    imageUrl={row.image}
                                                    altText=""
                                                    size="medium"
                                                />
                                            </Row>
                                            {row.solution}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
            </>
        );
    }
}

export default withRouter(BaffleBoard);
