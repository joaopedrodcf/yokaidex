import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Column, ContainerEvolutions } from './style';

import utils from '../utils';
import Image from '../shared/image';
import { evolutions } from '../../mocks';

const Evolution = ({ evolutionIndexes, gameVersion }) => (
    <>
        {utils
            .getEvolution(evolutions, evolutionIndexes)
            .filter(evo => evo.type === 'level')
            .map((evo, index) => (
                <ContainerEvolutions key={index}>
                    <Row>
                        <Column>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[0].name
                                }`}
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
                            <FontAwesomeIcon icon="arrow-right" />
                            Level {evo.level}
                        </Column>
                        <Column>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[1].name
                                }`}
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
            .getEvolution(evolutions, evolutionIndexes)
            .filter(evo => evo.type === 'fusion' && !evo.withItems)
            .map(evo => (
                <ContainerEvolutions>
                    <Row>
                        <Column>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[0].name
                                }`}
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
                            <FontAwesomeIcon icon="plus" />
                        </Column>
                        <Column>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[1].name
                                }`}
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
                            <FontAwesomeIcon icon="equals" />
                        </Column>
                        <Column>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[2].name
                                }`}
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
            .getEvolution(evolutions, evolutionIndexes)
            .filter(evo => evo.type === 'fusion' && evo.withItems)
            .map(evo => (
                <ContainerEvolutions>
                    <Row>
                        <Column>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[0].name
                                }`}
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
                                to={`/yokai-watch-${gameVersion}/${
                                    evo.yokais[1].name
                                }`}
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
    </>
);

export default Evolution;
