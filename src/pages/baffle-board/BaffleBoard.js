/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import { Table, Row } from './style';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { GameVersionContext, BaffleBoardContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const BaffleBoard = () => {
    const { gameVersion } = useContext(GameVersionContext);
    const { baffleBoard } = useContext(BaffleBoardContext);
    const history = useHistory();

    const goTo = (name) => {
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
                    content={`Baffle board is quiz that unlocks special features in Yo-kai Watch ${gameVersion}`}
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
                    {baffleBoard.map((row) => (
                        <tr key={row.index} onClick={() => goTo(row.solution)}>
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

export default withTracker(BaffleBoard);
