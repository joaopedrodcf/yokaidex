import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Column,
    Container,
    Row,
    SpecialDiv,
    ContainerEvolutions
} from './style';
import { elements, foods, ranks, tribes, evolutions } from '../../mocks';
import Image from '../shared/image';
import SideTable from '../shared/side-table';
import Table from '../shared/table';
import utils from '../utils';

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
    locations,
    skill,
    attack,
    technique,
    soultime,
    inspirit,
    evolutionIndexes
}) => (
    <Container>
        <h2>{name}</h2>
        <Image imageUrl={image} altText={name} size="large" />
        <h2>{yokaiNumber}</h2>
        <SpecialDiv>
            <Image
                imageUrl={utils.getImage(tribes, tribe)}
                altText={tribe}
                size="small"
            />
            <Image
                imageUrl={utils.getImage(ranks, rank)}
                altText={rank}
                size="small"
            />
            <Image
                imageUrl={utils.getImage(elements, element)}
                altText={element}
                size="small"
            />
        </SpecialDiv>

        <Table
            headers={['Bio']}
            rows={[description]}
            color={utils.getColor(tribes, tribe)}
        />

        {tribe !== 'boss' && (
            <>
                <Table
                    headers={['Favourite food']}
                    imageRows={[
                        {
                            types: foods,
                            wantedType: favouriteFood,
                            size: 'special'
                        }
                    ]}
                    color={utils.getColor(tribes, tribe)}
                />

                {evolutionIndexes && (
                    <Table
                        headers={['Evolution']}
                        color={utils.getColor(tribes, tribe)}
                    >
                        {utils
                            .getEvolution(evolutions, evolutionIndexes)
                            .filter(evo => evo.type === 'level')
                            .map((evo, index) => (
                                <ContainerEvolutions key={index}>
                                    <Row>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[0].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[0].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />
                                                {evo.yokais[0].name}
                                            </Link>
                                        </Column>
                                        <Column>
                                            <FontAwesomeIcon icon="arrow-right" />
                                            Level {evo.level}
                                        </Column>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[1].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[1].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />
                                                {evo.yokais[1].name}
                                            </Link>
                                        </Column>
                                    </Row>
                                </ContainerEvolutions>
                            ))}

                        {utils
                            .getEvolution(evolutions, evolutionIndexes)
                            .filter(
                                evo => evo.type === 'fusion' && !evo.withItems
                            )
                            .map(evo => (
                                <ContainerEvolutions>
                                    <Row>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[0].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[0].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />
                                                {evo.yokais[0].name}
                                            </Link>
                                        </Column>
                                        <Column>
                                            <FontAwesomeIcon icon="plus" />
                                        </Column>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[1].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[1].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />
                                                {evo.yokais[1].name}
                                            </Link>
                                        </Column>
                                        <Column>
                                            <FontAwesomeIcon icon="equals" />
                                        </Column>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[2].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[2].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />
                                                {evo.yokais[2].name}
                                            </Link>
                                        </Column>
                                    </Row>
                                </ContainerEvolutions>
                            ))}

                        {utils
                            .getEvolution(evolutions, evolutionIndexes)
                            .filter(
                                evo => evo.type === 'fusion' && evo.withItems
                            )
                            .map(evo => (
                                <ContainerEvolutions>
                                    <Row>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[0].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[0].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />
                                                {evo.yokais[0].name}
                                            </Link>
                                        </Column>
                                        <Column>
                                            <FontAwesomeIcon icon="plus" />
                                        </Column>
                                        <Column>
                                            <Image
                                                imageUrl={evo.item.image}
                                                altText=""
                                                size="medium"
                                            />
                                            {evo.item.name}
                                        </Column>
                                        <Column>
                                            <FontAwesomeIcon icon="equals" />
                                        </Column>
                                        <Column>
                                            <Link
                                                to={`/yokai/${
                                                    evo.yokais[1].name
                                                }`}
                                            >
                                                <Image
                                                    imageUrl={
                                                        evo.yokais[1].image
                                                    }
                                                    altText=""
                                                    size="medium"
                                                />

                                                {evo.yokais[1].name}
                                            </Link>
                                        </Column>
                                    </Row>
                                </ContainerEvolutions>
                            ))}
                    </Table>
                )}

                <SideTable
                    headers={['Skill', 'Description']}
                    rows={[skill.name, skill.description]}
                    color="#ba68c8"
                />

                <SideTable
                    headers={['Attack', 'Power']}
                    rows={[attack.name, attack.power]}
                    color="#fff176"
                />

                <SideTable
                    headers={['Technique', 'Power']}
                    rows={[technique.name, technique.power]}
                    color="#64b5f6"
                />

                <SideTable
                    headers={['Soultime', 'Power', 'Description']}
                    rows={[soultime.name, soultime.power, soultime.description]}
                    color="#e57373"
                />

                <SideTable
                    headers={['Inspirit', 'Power', 'Description']}
                    rows={[inspirit.name, inspirit.power, inspirit.description]}
                    color="#f06292"
                />

                <SideTable
                    headers={['Level', 'HP', 'STR', 'SPR', 'DEF', 'SPD']}
                    rows={[
                        60,
                        stats.hp,
                        stats.str,
                        stats.spr,
                        stats.def,
                        stats.spd
                    ]}
                    colors={[
                        '#fdd835',
                        '#f06292',
                        '#e57373',
                        '#ba68c8',
                        '#64b5f6',
                        '#81c784'
                    ]}
                />

                <Table
                    headers={['Locations']}
                    color={utils.getColor(tribes, tribe)}
                >
                    {locations.map((location, index) => (
                        <tr key={index}>
                            <td>
                                <Row>
                                    <Column>{location}</Column>
                                </Row>
                            </td>
                        </tr>
                    ))}
                </Table>
            </>
        )}
    </Container>
);

export default Card;
