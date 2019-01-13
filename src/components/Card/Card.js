import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table, Column, Row } from './style';
import tribes from '../../mocks/tribes';
import attributes from '../../attributes';
import ranks from '../../mocks/ranks';
import foods from '../../mocks/foods';
import Image from '../shared/Image';

const Card = ({
    name,
    tribe,
    image,
    attribute,
    rank,
    yokaiNumber1,
    yokaiNumber2,
    yokaiNumber3,
    yokaiFood1,
    yokaiFood2,
    yokaiFood3,
    baseStats,
    hp,
    spirit,
    power,
    speed,
    defence
}) => (
    <Container>
        <h2>{name}</h2>

        <Image imageUrl={image} altText={name} size="large" />

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
                        <Image
                            imageUrl={
                                tribes.find(trb => tribe === trb.name).image
                            }
                            altText={tribe}
                            size="small"
                        />
                    </td>
                    <td>
                        <Image
                            imageUrl={
                                ranks.find(rnk => rank === rnk.name).image
                            }
                            altText={rank}
                            size="small"
                        />
                    </td>
                    <td>
                        <Image
                            imageUrl={
                                attributes.find(atr => attribute === atr.name)
                                    .image
                            }
                            altText={attribute}
                            size="small"
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
                    <th>Yokai watch 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{yokaiNumber1}</td>
                    <td>{yokaiNumber2}</td>
                    <td>{yokaiNumber3}</td>
                </tr>
            </tbody>
        </Table>

        <Table>
            <thead>
                <tr>
                    <th>Favorite food</th>
                    <th>Favorite food</th>
                    <th>Favorite food</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Image
                            imageUrl={
                                foods.find(food => yokaiFood1 === food.name)
                                    .image
                            }
                            altText={rank}
                            size="special"
                        />
                    </td>
                    <td>
                        <Image
                            imageUrl={
                                foods.find(food => yokaiFood2 === food.name)
                                    .image
                            }
                            altText={rank}
                            size="special"
                        />
                    </td>
                    <td>
                        <Image
                            imageUrl={
                                foods.find(food => yokaiFood3 === food.name)
                                    .image
                            }
                            altText={rank}
                            size="special"
                        />
                    </td>
                </tr>
            </tbody>
        </Table>

        <Table>
            <thead>
                <tr>
                    <th>BASE STATS</th>
                    <th>HP</th>
                    <th>SPR</th>
                    <th>STR</th>
                    <th>SPD</th>
                    <th>DEF</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{baseStats}</td>
                    <td>{hp}</td>
                    <td>{spirit}</td>
                    <td>{power}</td>
                    <td>{speed}</td>
                    <td>{defence}</td>
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
                                <Image
                                    imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/pandle.png"
                                    altText=""
                                    size="medium"
                                />
                                Pandle
                            </Column>
                            <Row>
                                Lv. 18
                                <FontAwesomeIcon icon="arrow-right" />
                            </Row>
                            <Column>
                                <Image
                                    imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/yokais/undy.png"
                                    altText=""
                                    size="medium"
                                />
                                Undy
                            </Column>
                        </Row>
                    </td>
                </tr>
            </tbody>
        </Table>
    </Container>
);

export default Card;
