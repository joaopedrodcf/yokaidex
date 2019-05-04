/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import {
    STable,
    STableText,
    STableTitle,
    ContainerSeal,
    SealElements,
    Label
} from './style';
import Image from '../../components/shared/image';
import {
    withGameVersionContext,
    withItemsContext,
    withCrankakaisContext
} from '../../store';
import utils from '../../components/utils';
import Global from '../../styles';

const hasStatsInfo = statsInfo =>
    Object.keys(statsInfo).some(key => statsInfo[key] !== '0');

const ItemCard = ({ context, match }) => {
    const item = context.getItem(match.params.name);

    return (
        <Global.Container>
            {item && (
                <>
                    <Helmet>
                        <title>{`${
                            item.name
                        } | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
                        <meta
                            name="description"
                            content={`${
                                item.name
                            } is an item from Yo-kai Watch ${
                                context.gameVersion
                            }`}
                        />
                        <meta name="og:image" content={item.image} />
                    </Helmet>
                    <Image
                        imageUrl={item.image}
                        altText={item.name}
                        size="medium"
                    />
                    <Global.Section isRow justifyContent="space-evenly">
                        <Global.BigLabel backgroundColor="#e1bee7">
                            <Global.BigLabelContent>
                                Sell
                            </Global.BigLabelContent>
                            <Global.BigLabelContent>
                                {item.priceInfo.sell}
                            </Global.BigLabelContent>
                        </Global.BigLabel>

                        <Global.BigLabel backgroundColor="#e1bee7">
                            <Global.BigLabelContent>Buy</Global.BigLabelContent>
                            <Global.BigLabelContent>
                                {item.priceInfo.buy}
                            </Global.BigLabelContent>
                        </Global.BigLabel>
                    </Global.Section>
                    {hasStatsInfo(item.statsInfo) && (
                        <Global.Section isRow justifyContent="space-evenly">
                            {Object.keys(item.statsInfo).map(
                                key =>
                                    item.statsInfo[key] !== '0' &&
                                    !item.statsInfo[key].match('-') && (
                                        <Global.BigLabel
                                            key={key}
                                            backgroundColor="#a5d6a7"
                                        >
                                            <Global.BigLabelContent uppercase>
                                                {key}
                                            </Global.BigLabelContent>
                                            <Global.BigLabelContent>
                                                {item.statsInfo[key]}
                                            </Global.BigLabelContent>
                                        </Global.BigLabel>
                                    )
                            )}

                            {Object.keys(item.statsInfo).map(
                                key =>
                                    item.statsInfo[key] !== '0' &&
                                    item.statsInfo[key].match('-') && (
                                        <Global.BigLabel
                                            key={key}
                                            backgroundColor="#ef9a9a"
                                        >
                                            <Global.BigLabelContent uppercase>
                                                {key}
                                            </Global.BigLabelContent>
                                            <Global.BigLabelContent>
                                                {item.statsInfo[key]}
                                            </Global.BigLabelContent>
                                        </Global.BigLabel>
                                    )
                            )}
                        </Global.Section>
                    )}

                    <Global.Section>
                        <STable>
                            <STableTitle color="#e1bee7">
                                Description
                            </STableTitle>
                            <STableText bold>{item.description}</STableText>
                        </STable>
                    </Global.Section>

                    {item.effect !== '' && (
                        <Global.Section>
                            <STable>
                                <STableTitle color="#e1bee7">
                                    Effect
                                </STableTitle>
                                <STableText>{item.effect}</STableText>
                            </STable>
                        </Global.Section>
                    )}

                    <Global.Section>
                        <STable>
                            <STableTitle color="#e1bee7">Locations</STableTitle>
                            <STableText>
                                {item.locations.map((location, index) => (
                                    <div key={index}>{location}</div>
                                ))}
                            </STableText>
                        </STable>
                    </Global.Section>

                    {item.crankakaiIndexes &&
                        context.gameVersion !== '3' &&
                        context
                            .getCrankakai(item.crankakaiIndexes)
                            .map(crankItem => (
                                <Global.Section>
                                    <Label color="#e1bee7">
                                        Crank-a-kai {crankItem.variation}
                                    </Label>
                                    <STable>
                                        <STableTitle color="#e1bee7">
                                            Prize
                                        </STableTitle>
                                        <ContainerSeal>
                                            {crankItem.elements.map(
                                                (prize, index) => (
                                                    <SealElements>
                                                        <Link
                                                            key={index}
                                                            to={`/yokai-watch-${
                                                                context.gameVersion
                                                            }/${
                                                                prize.type
                                                            }/${utils.uniformizeNames(
                                                                prize.name
                                                            )}/`}
                                                        >
                                                            <Image
                                                                imageUrl={
                                                                    prize.image
                                                                }
                                                                altText=""
                                                                size="medium"
                                                            />
                                                            {prize.name}
                                                        </Link>
                                                    </SealElements>
                                                )
                                            )}
                                        </ContainerSeal>
                                    </STable>
                                </Global.Section>
                            ))}

                    {item.crankakaiIndexes &&
                        context.gameVersion === '3' &&
                        context
                            .getCrankakai(item.crankakaiIndexes)
                            .map(crankItem => (
                                <>
                                    <Global.Section>
                                        <Label color="#e1bee7">
                                            Crank-a-kai {crankItem.variation}
                                        </Label>
                                        <STable>
                                            <STableTitle color="#e1bee7">
                                                First prize
                                            </STableTitle>
                                            <ContainerSeal>
                                                {crankItem.first_prize.map(
                                                    (prize, index) => (
                                                        <SealElements>
                                                            <Link
                                                                key={index}
                                                                to={`/yokai-watch-${
                                                                    context.gameVersion
                                                                }/${
                                                                    prize.type
                                                                }/${utils.uniformizeNames(
                                                                    prize.name
                                                                )}/`}
                                                            >
                                                                <Image
                                                                    imageUrl={
                                                                        prize.image
                                                                    }
                                                                    altText=""
                                                                    size="medium"
                                                                />
                                                                {prize.name}
                                                            </Link>
                                                        </SealElements>
                                                    )
                                                )}
                                            </ContainerSeal>
                                        </STable>
                                    </Global.Section>
                                    <Global.Section>
                                        <STable>
                                            <STableTitle color="#e1bee7">
                                                Second prize
                                            </STableTitle>

                                            <ContainerSeal>
                                                {crankItem.second_prize.map(
                                                    (prize, index) => (
                                                        <SealElements>
                                                            <Link
                                                                key={index}
                                                                to={`/yokai-watch-${
                                                                    context.gameVersion
                                                                }/${
                                                                    prize.type
                                                                }/${utils.uniformizeNames(
                                                                    prize.name
                                                                )}/`}
                                                            >
                                                                <Image
                                                                    imageUrl={
                                                                        prize.image
                                                                    }
                                                                    altText=""
                                                                    size="medium"
                                                                />
                                                                {prize.name}
                                                            </Link>
                                                        </SealElements>
                                                    )
                                                )}
                                            </ContainerSeal>
                                        </STable>
                                    </Global.Section>
                                    <Global.Section>
                                        <STable>
                                            <STableTitle color="#e1bee7">
                                                Third prize
                                            </STableTitle>

                                            <ContainerSeal>
                                                {crankItem.third_prize.map(
                                                    (prize, index) => (
                                                        <SealElements>
                                                            <Link
                                                                key={index}
                                                                to={`/yokai-watch-${
                                                                    context.gameVersion
                                                                }/${
                                                                    prize.type
                                                                }/${utils.uniformizeNames(
                                                                    prize.name
                                                                )}/`}
                                                            >
                                                                <Image
                                                                    imageUrl={
                                                                        prize.image
                                                                    }
                                                                    altText=""
                                                                    size="medium"
                                                                />
                                                                {prize.name}
                                                            </Link>
                                                        </SealElements>
                                                    )
                                                )}
                                            </ContainerSeal>
                                        </STable>
                                    </Global.Section>
                                    <Global.Section>
                                        <STable>
                                            <STableTitle color="#e1bee7">
                                                Default prize
                                            </STableTitle>
                                            <ContainerSeal>
                                                {crankItem.default_prize.map(
                                                    (prize, index) => (
                                                        <SealElements>
                                                            <Link
                                                                key={index}
                                                                to={`/yokai-watch-${
                                                                    context.gameVersion
                                                                }/${
                                                                    prize.type
                                                                }/${utils.uniformizeNames(
                                                                    prize.name
                                                                )}/`}
                                                            >
                                                                <Image
                                                                    imageUrl={
                                                                        prize.image
                                                                    }
                                                                    altText=""
                                                                    size="medium"
                                                                />
                                                                {prize.name}
                                                            </Link>
                                                        </SealElements>
                                                    )
                                                )}
                                            </ContainerSeal>
                                        </STable>
                                    </Global.Section>
                                </>
                            ))}
                </>
            )}
        </Global.Container>
    );
};

export default withRouter(
    withGameVersionContext(withItemsContext(withCrankakaisContext(ItemCard)))
);
