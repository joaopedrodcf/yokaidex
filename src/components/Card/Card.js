import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table, Column, Row } from './style';
import tribes from '../../mocks/tribes';
import attributes from '../../attributes';
import ranks from '../../mocks/ranks';
import foods from '../../mocks/foods';
import Image from '../shared/image';
import SCTable from '../shared/table';

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

        <SCTable
            headers={['Tribe', 'Rank', 'Attribute']}
            imageRows={[
                { types: tribes, wantedType: tribe, size: 'small' },
                { types: ranks, wantedType: rank, size: 'small' },
                { types: attributes, wantedType: attribute, size: 'small' }
            ]}
        />

        <SCTable
            headers={['Yokai watch 1', 'Yokai watch 2', 'Yokai watch 3']}
            rows={[yokaiNumber1, yokaiNumber2, yokaiNumber3]}
        />

        <SCTable
            headers={['Fav food 1', 'Fav food 2', 'Fav food 3']}
            imageRows={[
                { types: foods, wantedType: yokaiFood1, size: 'special' },
                { types: foods, wantedType: yokaiFood2, size: 'special' },
                { types: foods, wantedType: yokaiFood3, size: 'special' }
            ]}
        />

        <SCTable
            headers={['BASE STATS', 'HP', 'SPR', 'STR', 'SPD', 'DEF']}
            rows={[baseStats, hp, spirit, power, speed, defence]}
        />

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
