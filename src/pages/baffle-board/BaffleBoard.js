/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Table, Row } from './style';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { withGameVersionContext, withBaffleBoardContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const BaffleBoard = ({ context, history }) => {
    const goTo = (name, gameVersion) => {
        history.push(
            `/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(name)}`
        );
    };

    return (
        <Global.Container>
            <Helmet>
                <title>
                    Baffle board | Yokaidex - Where you can find all the
                    information from Yo-kai Watch games!
                </title>
                <meta
                    name="description"
                    content={`Baffle board is quiz that unlocks special features in Yo-kai Watch ${context.gameVersion}`}
                />
            </Helmet>
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
                                goTo(row.solution, context.gameVersion)
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
        </Global.Container>
    );
};

export default withRouter(
    withGameVersionContext(withBaffleBoardContext(withTracker(BaffleBoard)))
);
