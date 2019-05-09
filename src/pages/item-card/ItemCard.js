/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { ContainerSeal, SealElements, Label } from './style';
import Image from '../../components/shared/image';
import {
    withGameVersionContext,
    withItemsContext,
    withCrankakaisContext
} from '../../store';
import utils from '../../components/utils';
import Global from '../../styles';
import Card from '../../components/card';
import BigLabel from '../../components/big-label';

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
                        <BigLabel
                            backgroundColor="#e1bee7"
                            text1="Sell"
                            text2={item.priceInfo.sell}
                        />

                        <BigLabel
                            backgroundColor="#e1bee7"
                            text1="Buy"
                            text2={item.priceInfo.buy}
                        />
                    </Global.Section>

                    {hasStatsInfo(item.statsInfo) && (
                        <Global.Section isRow justifyContent="space-evenly">
                            {Object.keys(item.statsInfo).map(
                                key =>
                                    item.statsInfo[key] !== '0' &&
                                    !item.statsInfo[key].match('-') && (
                                        <BigLabel
                                            key={key}
                                            backgroundColor="#a5d6a7"
                                            text1={key}
                                            text1Uppercase
                                            text2={item.statsInfo[key]}
                                        />
                                    )
                            )}

                            {Object.keys(item.statsInfo).map(
                                key =>
                                    item.statsInfo[key] !== '0' &&
                                    item.statsInfo[key].match('-') && (
                                        <BigLabel
                                            key={key}
                                            backgroundColor="#ef9a9a"
                                            text1={key}
                                            text1Uppercase
                                            text2={item.statsInfo[key]}
                                        />
                                    )
                            )}
                        </Global.Section>
                    )}

                    <Card title="Description" color="#e1bee7">
                        {item.description}
                    </Card>

                    {item.effect !== '' && (
                        <Card title="Effect" color="#e1bee7">
                            {item.effect}
                        </Card>
                    )}

                    <Card title="Locations" color="#e1bee7">
                        {item.locations.map((location, index) => (
                            <div key={index}>{location}</div>
                        ))}
                    </Card>

                    {item.crankakaiIndexes &&
                        context.gameVersion !== '3' &&
                        context
                            .getCrankakai(item.crankakaiIndexes)
                            .map(crankItem => (
                                <Global.Section>
                                    <Label color="#e1bee7">
                                        Crank-a-kai {crankItem.variation}
                                    </Label>
                                    <Global.Card>
                                        <Global.CardTitle color="#e1bee7">
                                            Prize
                                        </Global.CardTitle>
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
                                                            )}`}
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
                                    </Global.Card>
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
                                        <Global.Card>
                                            <Global.CardTitle color="#e1bee7">
                                                First prize
                                            </Global.CardTitle>
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
                                                                )}`}
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
                                        </Global.Card>
                                    </Global.Section>
                                    <Global.Section>
                                        <Global.Card>
                                            <Global.CardTitle color="#e1bee7">
                                                Second prize
                                            </Global.CardTitle>

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
                                                                )}`}
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
                                        </Global.Card>
                                    </Global.Section>
                                    <Global.Section>
                                        <Global.Card>
                                            <Global.CardTitle color="#e1bee7">
                                                Third prize
                                            </Global.CardTitle>

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
                                                                )}`}
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
                                        </Global.Card>
                                    </Global.Section>
                                    <Global.Section>
                                        <Global.Card>
                                            <Global.CardTitle color="#e1bee7">
                                                Default prize
                                            </Global.CardTitle>
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
                                                                )}`}
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
                                        </Global.Card>
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
