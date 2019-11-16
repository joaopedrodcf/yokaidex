/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import Price from './price';
import Stats from './stats/Stats';
import Description from './description';
import Effect from './effect';
import Location from './location';
import Crankakai from './crankakai';
import Image from '../../components/shared/image';
import {
    withGameVersionContext,
    withItemsContext,
    withCrankakaisContext
} from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const ItemCard = ({ context, match }) => {
    const item = context.getItem(match.params.name);

    if (!item) {
        return (
            <Global.Container>Page not found please go back</Global.Container>
        );
    }

    return (
        <Global.Container>
            <Helmet>
                <title>{`${item.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
                <meta
                    name="description"
                    content={`${item.name} is an item from Yo-kai Watch ${context.gameVersion}`}
                />
                <meta name="og:image" content={item.image} />
            </Helmet>
            <Image imageUrl={item.image} altText={item.name} size="medium" />
            <Price sell={item.priceInfo.sell} buy={item.priceInfo.buy} />
            <Stats statsInfo={item.statsInfo} />
            <Description description={item.description} />
            <Effect effect={item.effect} />
            <Location locations={item.locations} />
            <Crankakai
                gameVersion={context.gameVersion}
                getCrankakai={context.getCrankakai}
                crankakaiIndexes={item.crankakaiIndexes}
            />
        </Global.Container>
    );
};

export default withRouter(
    withGameVersionContext(
        withItemsContext(withCrankakaisContext(withTracker(ItemCard)))
    )
);
