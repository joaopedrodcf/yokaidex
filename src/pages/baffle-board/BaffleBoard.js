import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Container, Table, Row } from './style';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { withGameVersionContext, withBaffleBoardContext } from '../../store';

class BaffleBoard extends Component {
    goTo(name, gameVersion) {
        const { history } = this.props;

        history.push(
            `/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(name)}`
        );
    }

    render() {
        const { context } = this.props;
        return (
            <>
                <Helmet>
                    <title>
                        Baffle board | Yokaidex - Where you can find all the
                        information from Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content={`Baffle board is quiz that unlocks special features in Yo-kai Watch ${
                            context.gameVersion
                        }`}
                    />
                </Helmet>
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
                            {context.baffleBoard.map((row, index) => (
                                <tr
                                    key={index}
                                    onClick={() =>
                                        this.goTo(
                                            row.solution,
                                            context.gameVersion
                                        )
                                    }
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
            </>
        );
    }
}

export default withRouter(
    withGameVersionContext(withBaffleBoardContext(BaffleBoard))
);
