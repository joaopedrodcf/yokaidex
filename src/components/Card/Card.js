import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table, Column, Row } from './style';

const Card = () => (
    <Container>
        <h2>Pandle</h2>

        <img
            src="https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pandle.png"
            alt=""
        />

        <Table>
            <thead>
                <tr>
                    <th>Tribe</th>
                    <th>Rank</th>
                    <th>Attribute</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img
                            src="https://res.cloudinary.com/dcrcweea8/image/upload/v1545341843/Yokai/tribes/brave.png"
                            alt=""
                            height="35"
                            width="35"
                        />
                    </td>
                    <td>
                        <img
                            src="https://res.cloudinary.com/dcrcweea8/image/upload/v1545345803/Yokai/attributes/fire.png"
                            alt=""
                            height="35"
                            width="35"
                        />
                    </td>
                    <td>
                        <img
                            src="https://res.cloudinary.com/dcrcweea8/image/upload/v1545345803/Yokai/ranks/e.png"
                            alt=""
                            height="35"
                            width="35"
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table>
            <thead>
                <tr>
                    <th>Yokai watch 1</th>
                    <th>Yokai watch 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </Table>
        <Table>
            <thead>
                <tr>
                    <th>Evolution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Row>
                            <Column>
                                <img
                                    src="https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pandle.png"
                                    alt=""
                                    height="64"
                                    width="64"
                                />
                                Pandle
                            </Column>
                            <Row>
                                Lv. 18
                                <FontAwesomeIcon icon="arrow-right" />
                            </Row>
                            <Column>
                                <img
                                    src="https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/undy.png"
                                    alt=""
                                    height="64"
                                    width="64"
                                />
                                Undy
                            </Column>
                        </Row>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table>
            <thead>
                <tr>
                    <th>Favorite food</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rice Balls</td>
                </tr>
            </tbody>
        </Table>
    </Container>
);

export default Card;
