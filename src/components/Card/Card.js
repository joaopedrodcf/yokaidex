import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table, Column, Row } from './style';
import tribes from '../../mocks/tribes';
import attributes from '../../mocks/attributes';
import ranks from '../../mocks/ranks';
import foods from '../../mocks/foods';
import Image from '../shared/image';
import SCTable from '../shared/table';

const getColor = (types, wantedType) => {
    const typeRow = types.find(aux => wantedType === aux.name);

    return typeRow ? typeRow.color1 : '';
};

const Card = ({
    name,
    description,
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
    hp,
    spirit,
    power,
    speed,
    defence,
    evolution,
    fusion
}) => (
        <Container>
            <h2>{name}</h2>

            <Image imageUrl={image} altText={name} size="large" />

            <SCTable
                headers={['Description']}
                rows={[description]}
                color={getColor(tribes, tribe)}
            />

            <SCTable
                headers={['Tribe', 'Rank', 'Attribute']}
                imageRows={[
                    { types: tribes, wantedType: tribe, size: 'small' },
                    { types: ranks, wantedType: rank, size: 'small' },
                    { types: attributes, wantedType: attribute, size: 'small' }
                ]}
                color={getColor(tribes, tribe)}
            />

            <SCTable
                headers={['Yokai watch 1', 'Yokai watch 2', 'Yokai watch 3']}
                rows={[yokaiNumber1, yokaiNumber2, yokaiNumber3]}
                color={getColor(tribes, tribe)}
            />

            <SCTable
                headers={['Fav food 1', 'Fav food 2', 'Fav food 3']}
                imageRows={[
                    { types: foods, wantedType: yokaiFood1, size: 'special' },
                    { types: foods, wantedType: yokaiFood2, size: 'special' },
                    { types: foods, wantedType: yokaiFood3, size: 'special' }
                ]}
                color={getColor(tribes, tribe)}
            />

            <SCTable
                headers={['HP', 'SPR', 'STR', 'SPD', 'DEF']}
                rows={[hp, spirit, power, speed, defence]}
                color={getColor(tribes, tribe)}
            />

            {evolution && (
                <Table color={getColor(tribes, tribe)}>
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
                                            imageUrl={evolution.image}
                                            altText=""
                                            size="medium"
                                        />
                                        {evolution.description}
                                    </Column>
                                </Row>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            )}

            {fusion && (
                <Table color={getColor(tribes, tribe)}>
                    <thead>
                        <tr>
                            <th>Fusion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Row>
                                    <Column>
                                        {fusion.image ? (
                                            <Row>
                                                <Image
                                                    imageUrl={fusion.image}
                                                    altText=""
                                                    size="medium"
                                                />
                                            </Row>
                                        ) : (
                                                <Row>
                                                    <Image
                                                        imageUrl={fusion.image1}
                                                        altText=""
                                                        size="medium"
                                                    />
                                                    <Image
                                                        imageUrl={fusion.image2}
                                                        altText=""
                                                        size="medium"
                                                    />
                                                </Row>
                                            )}

                                        {fusion.description}
                                    </Column>
                                </Row>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            )}
        </Container>
    );

export default Card;
