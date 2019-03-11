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
                <STableTitle color="#e1bee7">Description</STableTitle>
                <STableText bold>{description}</STableText>
            </STable>
        </Sections>

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

        {effect !== '' && (
            <Sections>
                <STable>
                    <STableTitle color="#e1bee7">Effect</STableTitle>
                    <STableText>{effect}</STableText>
                </STable>
            </Sections>
        )}

        {hasStatsInfo(statsInfo) && (
            <Sections>
                <STable>
                    <STableTitle color="#e1bee7">Stats</STableTitle>

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
                <STableTitle color="#e1bee7">Prices</STableTitle>
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
