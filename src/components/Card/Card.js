import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Column, Row, SpecialDiv } from './style';
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

const getImage = (types, wantedType) => {
    const typeRow = types.find(aux => wantedType === aux.name.toLowerCase());

    return typeRow ? typeRow.image : '';
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
        <h2>{yokaiNumber}</h2>
        <SpecialDiv>
            <Image
                imageUrl={getImage(tribes, tribe)}
                altText={tribe}
                size="small"
            />
            <Image
                imageUrl={getImage(ranks, rank)}
                altText={rank}
                size="small"
            />
            <Image
                imageUrl={getImage(elements, element)}
                altText={element}
                size="small"
            />
        </SpecialDiv>

        <SCTable
            headers={['Bio']}
            rows={[description]}
            color={getColor(tribes, tribe)}
        />
        <Table color="#ba68c8">
            <tr>
                <th>Skill</th>
                <td>{skill.name}</td>
            </tr>
            <tr>
                <th>Power</th>
                <td>{skill.description}</td>
            </tr>
        </Table>
        <Table color="#fff176">
            <tr>
                <th>Attack</th>
                <td>{attack.name}</td>
            </tr>
            <tr>
                <th>Power</th>
                <td>{attack.power}</td>
            </tr>
        </Table>
        <Table color="#64b5f6">
            <tr>
                <th>Technique</th>
                <td>{technique.name}</td>
            </tr>
            <tr>
                <th>Power</th>
                <td>{technique.power}</td>
            </tr>
        </Table>
        <Table color="#e57373">
            <tr>
                <th>Soultime</th>
                <td>{soultime.name}</td>
            </tr>
            <tr>
                <th>Power</th>
                <td>{soultime.power}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{soultime.description}</td>
            </tr>
        </Table>
        <Table color="#f06292">
            <tr>
                <th>Inspirit</th>
                <td>{inspirit.name}</td>
            </tr>
            <tr>
                <th>Power</th>
                <td>{inspirit.power}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{inspirit.description}</td>
            </tr>
        </Table>
        <SCTable
            headers={['Favourite food']}
            imageRows={[
                { types: foods, wantedType: favouriteFood, size: 'special' }
            ]}
            color={getColor(tribes, tribe)}
        />

        <Table>
            <tr>
                <th style={{ backgroundColor: '#fdd835' }}>Level</th>
                <td>60</td>
            </tr>
            <tr>
                <th style={{ backgroundColor: '#f06292' }}>HP</th>
                <td>{stats.hp}</td>
            </tr>
            <tr>
                <th style={{ backgroundColor: '#e57373' }}>STR</th>
                <td>{stats.str}</td>
            </tr>
            <tr>
                <th style={{ backgroundColor: '#ba68c8' }}>SPR</th>
                <td>{stats.str}</td>
            </tr>
            <tr>
                <th style={{ backgroundColor: '#64b5f6' }}>DEF</th>
                <td>{stats.def}</td>
            </tr>
            <tr>
                <th style={{ backgroundColor: '#81c784' }}>SPD</th>
                <td>{stats.spd}</td>
            </tr>
        </Table>
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
    </Container>
);

export default Card;
