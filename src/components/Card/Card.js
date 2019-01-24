import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Column, Row } from './style';
import tribes from '../../mocks/tribes';
import elements from '../../mocks/elements';
import ranks from '../../mocks/ranks';
import foods from '../../mocks/foods';
import Image from '../shared/image';
import SCTable from '../shared/table';

const getColor = (types, wantedType) => {
    const typeRow = types.find(
        aux => wantedType.toLowerCase() === aux.name.toLowerCase()
    );

    return typeRow ? typeRow.color1 : '';
};

const Card = ({
    name,
    description,
    tribe,
    image,
    element,
    rank,
    yokaiNumber,
    favouriteFood,
    stats,
    evolution,
    fusion,
    locations,
    skill,
    attack,
    technique,
    soultime,
    inspirit
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
                { types: elements, wantedType: element, size: 'small' }
            ]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Yokai number']}
            rows={[yokaiNumber]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Favourite food']}
            imageRows={[
                { types: foods, wantedType: favouriteFood, size: 'special' }
            ]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Level', 'HP', 'STR', 'SPR', 'DEF', 'SPD']}
            rows={[60, stats.hp, stats.str, stats.spr, stats.def, stats.spd]}
            color={getColor(tribes, tribe)}
        />

        <Table color={getColor(tribes, tribe)}>
            <thead>
                <tr>
                    <th>Locations</th>
                </tr>
            </thead>
            <tbody>
                {locations.map((location, index) => (
                    <tr key={index}>
                        <td>
                            <Row>
                                <Column>{location}</Column>
                            </Row>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <SCTable
            headers={['Skill', 'Description']}
            rows={[skill.name, skill.description]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Attack', 'Power']}
            rows={[attack.name, attack.power]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Technique', 'Power']}
            rows={[technique.name, technique.power]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Soultime', 'Description', 'Power']}
            rows={[soultime.name, soultime.description, soultime.power]}
            color={getColor(tribes, tribe)}
        />

        <SCTable
            headers={['Inspirit', 'Description', 'Power']}
            rows={[inspirit.name, inspirit.description, inspirit.power]}
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
                            {evolution.map(evo => (
                                <Row>
                                    <Column>
                                        <Row>
                                            {evo.yokais.map(yk => (
                                                <Link to={`/yokai/${yk.name}`}>
                                                    <Image
                                                        imageUrl={yk.image}
                                                        altText=""
                                                        size="medium"
                                                    />
                                                </Link>
                                            ))}
                                        </Row>
                                        {evo.description}
                                    </Column>
                                </Row>
                            ))}
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
