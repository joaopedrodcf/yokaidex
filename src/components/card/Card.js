import React from 'react';
import {
    Column,
    Container,
    Row,
    SpecialDiv,
    ProgressBar,
    Bar,
    Label,
    Sepators,
    Moves,
    MovesTitle,
    MovesText
} from './style';
import { elements, foods, ranks, tribes } from '../../mocks';
import Image from '../shared/image';
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
                    <Sepators>
                        <Label color={utils.getColor(tribes, tribe)}>
                            Evolution
                        </Label>
                        <Evolution
                            gameVersion={gameVersion}
                            evolutionIndexes={evolutionIndexes}
                            tribe={tribe}
                        />
                    </Sepators>
                )}

                <Sepators>
                    <Label color={utils.getColor(tribes, tribe)}>Moves</Label>
                    <Moves color="#e1bee7">
                        <div>
                            <MovesTitle color="#7b1fa2">Skill</MovesTitle>
                            <MovesText bold>{skill.name}</MovesText>
                            <MovesText>{skill.description}</MovesText>
                        </div>
                    </Moves>
                    <Moves color="#fff176">
                        <div>
                            <MovesTitle color="#f57f17">Attack</MovesTitle>
                            <MovesText bold>{attack.name}</MovesText>
                        </div>
                        <MovesText>
                            <Image
                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/attack.png"
                                altText="attack"
                                size="small"
                            />
                            {attack.power}
                        </MovesText>
                    </Moves>
                    <Moves color="#b3e5fc">
                        <div>
                            <MovesTitle color="#0277bd">Technique</MovesTitle>
                            <MovesText bold>{technique.name}</MovesText>
                        </div>
                        <MovesText>
                            <Image
                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/technique.png"
                                altText="attack"
                                size="small"
                            />
                            {technique.power}
                        </MovesText>
                    </Moves>
                    <Moves color="#ef9a9a">
                        <div>
                            <MovesTitle color="#c62828">Soultime</MovesTitle>
                            <MovesText bold>{soultime.name}</MovesText>
                            <MovesText>{soultime.description}</MovesText>
                        </div>
                        <MovesText>
                            <Image
                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/soultime.png"
                                altText="attack"
                                size="small"
                            />
                            {soultime.power}
                        </MovesText>
                    </Moves>
                    <Moves color="#f8bbd0">
                        <div>
                            <MovesTitle color="#d81b60">Inspirit</MovesTitle>
                            <MovesText bold>{inspirit.name}</MovesText>
                            <MovesText>{inspirit.description}</MovesText>
                        </div>
                        <MovesText>
                            <Image
                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/inspirit.png"
                                altText="attack"
                                size="small"
                            />
                            {inspirit.power}
                        </MovesText>
                    </Moves>
                </Sepators>

                <Sepators>
                    <Label color={utils.getColor(tribes, tribe)}>Stats</Label>
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
                </Sepators>

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
