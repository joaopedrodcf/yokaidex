/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import Crankakai from './crankakai';
import Food from './food';
import Moves from './moves';
import Evolution from './evolution';
import Stats from './stats';
import Seal from './seal';
import Location from './location';
import Description from './description';
import Type from './type';
import TribeNElement from './tribe-n-element';
import SideInformation from './side-information';
import { tribes } from '../../mocks';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { GameVersionContext, YokaisContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const YokaiCard = () => {
    const { gameVersion } = useContext(GameVersionContext);
    const { getYokai } = useContext(YokaisContext);
    const { name } = useParams();

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
                <meta name="og:image" content={yokai.image} />
            </Helmet>

            <Image imageUrl={yokai.image} altText={yokai.name} size="large" />
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
