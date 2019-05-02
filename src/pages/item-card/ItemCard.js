import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
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
import { withGameVersionContext, withItemsContext } from '../../store';

const hasStatsInfo = statsInfo =>
    Object.keys(statsInfo).some(key => statsInfo[key] !== '0');

class ItemCard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            item: undefined
        };
    }

    componentDidMount() {
        this.fetchItem();
    }

    componentDidUpdate(prevProps) {
        // eslint-disable-next-line
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.fetchItem();
        }
    }

    fetchItem() {
        const { context, match } = this.props;

        this.setState({
            item: context.getItem(match.params.name)
        });
    }

    render() {
        const { context } = this.props;
        const { item } = this.state;

        return (
            <>
                {item && (
                    <Container>
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
                        <Sections isRow justifyContent="space-evenly">
                            <SLabel backgroundColor="#e1bee7">
                                <SLabelText>Sell</SLabelText>
                                <SLabelText>{item.priceInfo.sell}</SLabelText>
                            </SLabel>

                            <SLabel backgroundColor="#e1bee7">
                                <SLabelText>Buy</SLabelText>
                                <SLabelText>{item.priceInfo.buy}</SLabelText>
                            </SLabel>
                        </Sections>
                        {hasStatsInfo(item.statsInfo) && (
                            <Sections isRow justifyContent="space-evenly">
                                {Object.keys(item.statsInfo).map(
                                    key =>
                                        item.statsInfo[key] !== '0' &&
                                        !item.statsInfo[key].match('-') && (
                                            <SLabel
                                                key={key}
                                                backgroundColor="#a5d6a7"
                                            >
                                                <SLabelText uppercase>
                                                    {key}
                                                </SLabelText>
                                                <SLabelText>
                                                    {item.statsInfo[key]}
                                                </SLabelText>
                                            </SLabel>
                                        )
                                )}

                                {Object.keys(item.statsInfo).map(
                                    key =>
                                        item.statsInfo[key] !== '0' &&
                                        item.statsInfo[key].match('-') && (
                                            <SLabel
                                                key={key}
                                                backgroundColor="#ef9a9a"
                                            >
                                                <SLabelText uppercase>
                                                    {key}
                                                </SLabelText>
                                                <SLabelText>
                                                    {item.statsInfo[key]}
                                                </SLabelText>
                                            </SLabel>
                                        )
                                )}
                            </Sections>
                        )}

                        <Sections>
                            <STable>
                                <STableTitle color="#e1bee7">
                                    Description
                                </STableTitle>
                                <STableText bold>{item.description}</STableText>
                            </STable>
                        </Sections>

                        {item.effect !== '' && (
                            <Sections>
                                <STable>
                                    <STableTitle color="#e1bee7">
                                        Effect
                                    </STableTitle>
                                    <STableText>{item.effect}</STableText>
                                </STable>
                            </Sections>
                        )}

                        <Sections>
                            <STable>
                                <STableTitle color="#e1bee7">
                                    Locations
                                </STableTitle>
                                <STableText>
                                    {item.locations.map((location, index) => (
                                        <div key={index}>{location}</div>
                                    ))}
                                </STableText>
                            </STable>
                        </Sections>
                    </Container>
                )}
            </>
        );
    }
}

export default withRouter(withGameVersionContext(withItemsContext(ItemCard)));
