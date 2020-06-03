import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from 'react-feather/dist/icons/arrow-right';
import Plus from 'react-feather/dist/icons/plus';
import { Row, Column, ContainerEvolutions } from './style';
import utils from '../../../components/utils';
import Image from '../../../components/shared/image';
import { evolutions } from '../../../mocks';
import Global from '../../../styles';

const Evolution = ({ yokai, color, gameVersion }) => (
    <>
        {yokai.evolutionIndexes && (
            <Global.Section>
                <Global.SectionHeader color={color}>
                    Evolution
                </Global.SectionHeader>
                {utils
                    .getEvolution(evolutions, yokai.evolutionIndexes)
                    .filter((evo) => evo.type === 'level')
                    .map((evo, index) => (
                        <ContainerEvolutions key={index}>
                            <Row>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[0].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[0].image}
                                            altText=""
                                            size="medium"
                                        />
                                        {evo.yokais[0].name}
                                    </Link>
                                </Column>
                                <Column>
                                    <ArrowRight />
                                    Level {evo.level}
                                </Column>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[1].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[1].image}
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
                    .getEvolution(evolutions, yokai.evolutionIndexes)
                    .filter((evo) => evo.type === 'fusion' && !evo.withItems)
                    .map((evo, index) => (
                        <ContainerEvolutions key={index}>
                            <Row>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[0].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[0].image}
                                            altText=""
                                            size="medium"
                                        />
                                        {evo.yokais[0].name}
                                    </Link>
                                </Column>
                                <Column>
                                    <Plus />
                                </Column>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[1].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[1].image}
                                            altText=""
                                            size="medium"
                                        />
                                        {evo.yokais[1].name}
                                    </Link>
                                </Column>
                                <Column>
                                    <ArrowRight />
                                </Column>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[2].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[2].image}
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
                    .getEvolution(evolutions, yokai.evolutionIndexes)
                    .filter((evo) => evo.type === 'fusion' && evo.withItems)
                    .map((evo, index) => (
                        <ContainerEvolutions key={index}>
                            <Row>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[0].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[0].image}
                                            altText=""
                                            size="medium"
                                        />
                                        {evo.yokais[0].name}
                                    </Link>
                                </Column>
                                <Column>
                                    <Plus />
                                </Column>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/items/${utils.uniformizeNames(
                                            evo.item.name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.item.image}
                                            altText=""
                                            size="medium"
                                        />
                                        {evo.item.name}
                                    </Link>
                                </Column>
                                <Column>
                                    <ArrowRight />
                                </Column>
                                <Column>
                                    <Link
                                        to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                                            evo.yokais[1].name
                                        )}`}
                                    >
                                        <Image
                                            imageUrl={evo.yokais[1].image}
                                            altText=""
                                            size="medium"
                                        />

                                        {evo.yokais[1].name}
                                    </Link>
                                </Column>
                            </Row>
                        </ContainerEvolutions>
                    ))}
            </Global.Section>
        )}
    </>
);

export default React.memo(Evolution);
