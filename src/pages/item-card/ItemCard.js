/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import Price from './price';
import Stats from './stats/Stats';
import Description from './description';
import Effect from './effect';
import Location from './location';
import Crankakai from './crankakai';
import Image from '../../components/shared/image';
import {
    GameVersionContext,
    ItemsContext,
    CrankakaisContext,
} from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const ItemCard = () => {
    const { getCrankakai } = useContext(CrankakaisContext);
    const { gameVersion } = useContext(GameVersionContext);
    const { getItem } = useContext(ItemsContext);
    const { name } = useParams();

    const item = getItem(name);

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
                    content={`${item.name} is an item from Yo-kai Watch ${gameVersion}`}
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
                gameVersion={gameVersion}
                getCrankakai={getCrankakai}
                crankakaiIndexes={item.crankakaiIndexes}
            />
        </Global.Container>
    );
};

export default withTracker(ItemCard);
