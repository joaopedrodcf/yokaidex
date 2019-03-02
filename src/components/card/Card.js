import React from 'react';
import {
    Column,
    Container,
    Row,
    SpecialDiv,
    ProgressBar,
    Bar,
    Label,
    Stats
} from './style';
import { elements, foods, ranks, tribes } from '../../mocks';
import Image from '../shared/image';
import SideTable from '../shared/side-table';
import Table from '../shared/table';
import utils from '../utils';
import Evolution from '../evolution';
import maxStats from '../../mocks/max-stats';

const calculatePercentage = (value, max) => {
    const percentage = (value / max) * 100;
    return `${percentage}%`;
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
    locations,
    skill,
    attack,
    technique,
    soultime,
    inspirit,
    evolutionIndexes,
    gameVersion
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
                    rows={[favouriteFood]}
                    color={utils.getColor(tribes, tribe)}
                />

                {evolutionIndexes && (
                    <Evolution
                        gameVersion={gameVersion}
                        evolutionIndexes={evolutionIndexes}
                        tribe={tribe}
                    />
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

                <Stats>
                    <Label color={utils.getColor(tribes, tribe)}>
                        Stats level 60
                    </Label>
                    {Object.entries(stats).map(([stat, value]) => (
                        <ProgressBar key={stat}>
                            <div>{stat}</div>
                            <div>{value}</div>
                            <Bar>
                                <div
                                    style={{
                                        width: calculatePercentage(
                                            value,
                                            maxStats.find(
                                                aux => aux.name === stat
                                            ).max
                                        ),
                                        backgroundColor: maxStats.find(
                                            aux => aux.name === stat
                                        ).color
                                    }}
                                />
                            </Bar>
                        </ProgressBar>
                    ))}
                </Stats>

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
