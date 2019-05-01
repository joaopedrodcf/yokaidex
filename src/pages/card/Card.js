import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    Container,
    SpecialDiv,
    ProgressBar,
    Bar,
    Label,
    Sections,
    Moves,
    MovesTitle,
    MovesText,
    STable,
    STableTitle,
    STableText,
    SLabel,
    SLabelText,
    ContainerSeal,
    SealElements
} from './style';
import { elements, foods, ranks, tribes, legendarys } from '../../mocks';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import Evolution from '../../components/evolution';
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
    gameVersion,
    seal
}) => (
    <Container>
        <Helmet>
            <title>{`${name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
            <meta
                name="description"
                content={`${name} is a yo-kai from ${tribe} tribe, of the rank ${rank} and with the attribute ${element} in Yo-kai Watch ${gameVersion}`}
            />
            <meta name="og:image" content={image} />
        </Helmet>
        <Image imageUrl={image} altText={name} size="large" />
        <SpecialDiv>
            <h2>#{yokaiNumber}</h2>
            <Image
                imageUrl={utils.getImage(ranks, rank)}
                altText={rank}
                size="small"
            />
        </SpecialDiv>

        <Sections isRow justifyContent="space-evenly">
            <SLabel backgroundColor={utils.getColor(tribes, tribe)}>
                <SLabelText>
                    <Image
                        imageUrl={utils.getImage(tribes, tribe)}
                        altText={tribe}
                        size="small"
                    />
                </SLabelText>
                <SLabelText>{tribe}</SLabelText>
            </SLabel>

            {tribe !== 'Boss' && (
                <SLabel
                    backgroundColor={utils.getColor(elements, element)}
                    color={utils.getSecondaryColor(elements, element)}
                >
                    <SLabelText>
                        <Image
                            imageUrl={utils.getImage(elements, element)}
                            altText={element}
                            size="small"
                        />
                    </SLabelText>
                    <SLabelText>{element}</SLabelText>
                </SLabel>
            )}
        </Sections>

        <Sections>
            <STable>
                <STableTitle color={utils.getColor(tribes, tribe)}>
                    Bio
                </STableTitle>
                <STableText bold>{description}</STableText>
            </STable>
        </Sections>

        {tribe !== 'Boss' && (
            <>
                <Sections>
                    <STable>
                        <STableTitle color={utils.getColor(tribes, tribe)}>
                            Favourite food
                        </STableTitle>
                        <STableText>
                            <Image
                                imageUrl={utils.getImage(foods, favouriteFood)}
                                altText={favouriteFood}
                                size="special"
                            />
                            {favouriteFood}
                        </STableText>
                    </STable>
                </Sections>

                <Sections>
                    <STable>
                        <STableTitle color={utils.getColor(tribes, tribe)}>
                            Locations
                        </STableTitle>
                        <STableText>
                            {locations.map((location, index) => (
                                <div key={index}>{location}</div>
                            ))}
                        </STableText>
                    </STable>
                </Sections>

                {evolutionIndexes && (
                    <Sections>
                        <Label color={utils.getColor(tribes, tribe)}>
                            Evolution
                        </Label>
                        <Evolution
                            gameVersion={gameVersion}
                            evolutionIndexes={evolutionIndexes}
                            tribe={tribe}
                        />
                    </Sections>
                )}

                {seal !== undefined && (
                    <Sections>
                        <Label color={utils.getColor(tribes, tribe)}>
                            Yokai seal
                        </Label>

                        <ContainerSeal>
                            {legendarys[seal].yokaisToUnlock.map(yokai => (
                                <SealElements>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            yokai.name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={yokai.image}
                                            altText=""
                                            size="medium"
                                        />
                                        {yokai.name}
                                    </Link>
                                </SealElements>
                            ))}
                        </ContainerSeal>
                    </Sections>
                )}

                <Sections>
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
                </Sections>

                <Sections>
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
                </Sections>
            </>
        )}
    </Container>
);

export default Card;
