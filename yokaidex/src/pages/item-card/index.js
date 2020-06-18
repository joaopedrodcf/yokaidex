/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation } from '@reach/router';
import Crankakai from '../../components/item-card/crankakai';
import Price from '../../components/item-card/price';
import Stats from '../../components/item-card/stats';
import Description from '../../components/item-card/description';
import Effect from '../../components/item-card/effect';
import Location from '../../components/item-card/location';
import Image from '../../components/shared/image';
import {
    GameVersionContext,
    ItemsContext,
    CrankakaisContext,
} from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';
import ShareButtons from '../../components/shared/share-buttons';

const ItemCard = () => {
    const { getCrankakai } = useContext(CrankakaisContext);
    const { gameVersion } = useContext(GameVersionContext);
    const { getItem } = useContext(ItemsContext);
    const { name } = useParams();
    const location = useLocation();

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

                {/* OG */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${item.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}
                />
                <meta
                    property="og:description"
                    content={`${item.name} is an item from Yo-kai Watch ${gameVersion}`}
                />
                <meta name="og:image" content={item.image} />
                <meta property="og:url" content={location.href} />

                {/* TWITTER */}
                <meta name="twitter:site" content="@yokaidex" />
                <meta
                    name="twitter:title"
                    content={`${item.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}
                />
                <meta
                    name="twitter:description"
                    content={`${item.name} is an item from Yo-kai Watch ${gameVersion}`}
                />
                <meta name="twitter:image" content={item.image} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Image imageUrl={item.image} altText={item.name} size="medium" />
            <h1>{item.name}</h1>
            <ShareButtons />
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
