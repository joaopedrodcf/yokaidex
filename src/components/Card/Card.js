import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table, Column, Row } from './style';
import tribes from '../../tribes';
import attributes from '../../attributes';
import ranks from '../../ranks';
import Image from '../shared/Image';

const Card = ({
    name,
    tribe,
    image,
    attribute,
    rank,
    yokai_number_1,
    yokai_number_2,
    yokai_number_3,
    yokai_food_1,
    yokai_food_2,
    yokai_food_3,
    base_stats,
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
                    <td>{yokai_number_1}</td>
                    <td>{yokai_number_2}</td>
                    <td>{yokai_number_3}</td>
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
                    <td>{yokai_food_1}</td>
                    <td>{yokai_food_2}</td>
                    <td>{yokai_food_3}</td>
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
                    <td>{base_stats}</td>
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
