import React from 'react';
import { Helmet } from 'react-helmet';
import {
    Container,
    Sections,
    STable,
    STableText,
    STableTitle,
    SLabel,
    SLabelText
} from './style';
import Image from '../../components/shared/image';

const hasStatsInfo = statsInfo =>
    Object.keys(statsInfo).some(key => statsInfo[key] !== '0');

const ItemCard = ({
    name,
    image,
    description,
    effect,
    locations,
    statsInfo,
    priceInfo,
    gameVersion
}) => (
    <Container>
        <Helmet>
            <title>{`${name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
            <meta
                name="description"
                content={`${name} is an item from Yo-kai Watch ${gameVersion}`}
            />
            <meta name="og:image" content={image} />
        </Helmet>
        <Image imageUrl={image} altText={name} size="medium" />

        <Sections isRow justifyContent="space-evenly">
            <SLabel backgroundColor="#e1bee7">
                <SLabelText>Sell</SLabelText>
                <SLabelText>{priceInfo.sell}</SLabelText>
            </SLabel>

            <SLabel backgroundColor="#e1bee7">
                <SLabelText>Buy</SLabelText>
                <SLabelText>{priceInfo.buy}</SLabelText>
            </SLabel>
        </Sections>
        {hasStatsInfo(statsInfo) && (
            <Sections isRow justifyContent="space-evenly">
                {Object.keys(statsInfo).map(
                    key =>
                        statsInfo[key] !== '0' &&
                        !statsInfo[key].match('-') && (
                            <SLabel key={key} backgroundColor="#a5d6a7">
                                <SLabelText uppercase>{key}</SLabelText>
                                <SLabelText>{statsInfo[key]}</SLabelText>
                            </SLabel>
                        )
                )}

                {Object.keys(statsInfo).map(
                    key =>
                        statsInfo[key] !== '0' &&
                        statsInfo[key].match('-') && (
                            <SLabel key={key} backgroundColor="#ef9a9a">
                                <SLabelText uppercase>{key}</SLabelText>
                                <SLabelText>{statsInfo[key]}</SLabelText>
                            </SLabel>
                        )
                )}
            </Sections>
        )}

        <Sections>
            <STable>
                <STableTitle color="#e1bee7">Description</STableTitle>
                <STableText bold>{description}</STableText>
            </STable>
        </Sections>

        {effect !== '' && (
            <Sections>
                <STable>
                    <STableTitle color="#e1bee7">Effect</STableTitle>
                    <STableText>{effect}</STableText>
                </STable>
            </Sections>
        )}

        <Sections>
            <STable>
                <STableTitle color="#e1bee7">Locations</STableTitle>
                <STableText>
                    {locations.map((location, index) => (
                        <div key={index}>{location}</div>
                    ))}
                </STableText>
            </STable>
        </Sections>
    </Container>
);

export default ItemCard;
