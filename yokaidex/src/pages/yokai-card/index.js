/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation } from '@reach/router';
import Crankakai from '../../components/yokai-card/crankakai';
import Food from '../../components/yokai-card/food';
import Moves from '../../components/yokai-card/moves';
import Evolution from '../../components/yokai-card/evolution';
import Stats from '../../components/yokai-card/stats';
import Location from '../../components/yokai-card/location';
import Description from '../../components/yokai-card/description';
import Type from '../../components/yokai-card/type';
import TribeNElement from '../../components/yokai-card/tribe-n-element';
import SideInformation from '../../components/yokai-card/side-information';
import Seal from '../../components/yokai-card/seal';
import { tribes } from '../../mocks';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { GameVersionContext, YokaisContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';
import ShareButtons from '../../components/shared/share-buttons';

const YokaiCard = () => {
    const { gameVersion } = useContext(GameVersionContext);
    const { getYokai } = useContext(YokaisContext);
    const { name } = useParams();
    const location = useLocation();

    const yokai = getYokai(name);

    if (!yokai) {
        return (
            <Global.Container>Page not found please go back</Global.Container>
        );
    }

    const color = utils.getColor(tribes, yokai.tribe);

    return (
        <Global.Container>
            <Helmet>
                <title>{`${yokai.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
                <meta
                    name="description"
                    content={`${yokai.name} is a yo-kai from ${yokai.tribe} tribe, of the rank ${yokai.rank} and with the attribute ${yokai.element} in Yo-kai Watch ${gameVersion}`}
                />
                {/* OG */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${yokai.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}
                />
                <meta
                    property="og:description"
                    content={`${yokai.name} is a yo-kai from ${yokai.tribe} tribe, of the rank ${yokai.rank} and with the attribute ${yokai.element} in Yo-kai Watch ${gameVersion}`}
                />
                <meta name="og:image" content={yokai.image} />
                <meta property="og:url" content={location.href} />
                {/* TWITTER */}
                <meta name="twitter:site" content="@yokaidex" />
                <meta
                    name="twitter:title"
                    content={`${yokai.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}
                />
                <meta
                    name="twitter:description"
                    content={`${yokai.name} is a yo-kai from ${yokai.tribe} tribe, of the rank ${yokai.rank} and with the attribute ${yokai.element} in Yo-kai Watch ${gameVersion}`}
                />
                <meta name="twitter:image" content={yokai.image} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Image imageUrl={yokai.image} altText={yokai.name} size="large" />
            <h1>{yokai.name}</h1>
            <ShareButtons />
            <SideInformation
                yokaiNumber={yokai.yokaiNumber}
                rank={yokai.rank}
            />
            <Type type={yokai.type} />
            <TribeNElement
                color={color}
                tribe={yokai.tribe}
                element={yokai.element}
            />
            <Description color={color} description={yokai.description} />

            {yokai.tribe !== 'Boss' && (
                <>
                    <Food color={color} favouriteFood={yokai.favouriteFood} />
                    <Location color={color} locations={yokai.locations} />
                    <Evolution
                        yokai={yokai}
                        color={color}
                        gameVersion={gameVersion}
                    />
                    <Seal
                        yokai={yokai}
                        color={color}
                        gameVersion={gameVersion}
                    />
                    <Crankakai
                        color={color}
                        gameVersion={gameVersion}
                        crankakai={yokai.crankakai}
                    />
                    <Moves yokai={yokai} color={color} />
                    <Stats yokai={yokai} color={color} />
                </>
            )}
        </Global.Container>
    );
};

export default withTracker(YokaiCard);
