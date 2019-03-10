import React from 'react';
import { Container, Sections, STable, STableText, STableTitle } from './style';

import Image from '../shared/image';

const hasStatsInfo = statsInfo =>
    Object.keys(statsInfo).some(key => statsInfo[key] !== '0');

const ItemCard = ({
    name,
    image,
    description,
    effect,
    locations,
    statsInfo,
    priceInfo
}) => (
    <Container>
        <Image imageUrl={image} altText={name} size="medium" />
        {name}
        <Sections>
            <STable>
                <STableTitle color="#ea80fc">Description</STableTitle>
                <STableText bold>{description}</STableText>
            </STable>
        </Sections>

        <Sections>
            <STable>
                <STableTitle color="#ea80fc">Locations</STableTitle>
                <STableText>
                    {locations.map((location, index) => (
                        <div key={index}>{location}</div>
                    ))}
                </STableText>
            </STable>
        </Sections>

        {effect !== '' && (
            <Sections>
                <STable>
                    <STableTitle color="#ea80fc">Effect</STableTitle>
                    <STableText>{effect}</STableText>
                </STable>
            </Sections>
        )}

        {hasStatsInfo(statsInfo) && (
            <Sections>
                <STable>
                    <STableTitle color="#ea80fc">Stats</STableTitle>

                    <STableText>
                        {Object.keys(statsInfo).map(
                            key =>
                                statsInfo[key] !== '0' && (
                                    <div key={key}>
                                        {key} = {statsInfo[key]}
                                    </div>
                                )
                        )}
                    </STableText>
                </STable>
            </Sections>
        )}

        <Sections>
            <STable>
                <STableTitle color="#ea80fc">Prices</STableTitle>
                <STableText>
                    {Object.keys(priceInfo).map(key => (
                        <div key={key}>
                            {key} = {priceInfo[key]}
                        </div>
                    ))}
                </STableText>
            </STable>
        </Sections>
    </Container>
);

export default ItemCard;
