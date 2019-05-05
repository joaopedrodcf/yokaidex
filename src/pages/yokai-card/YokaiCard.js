/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { SideInformation } from './style';
import { elements, foods, ranks, tribes } from '../../mocks';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { withGameVersionContext, withYokaisContext } from '../../store';
import Global from '../../styles';
import Evolution from '../../components/evolution';
import Stats from '../../components/stats';
import Moves from '../../components/moves';
import Seal from '../../components/seal';
import Card from '../../components/card';
import BigLabel from '../../components/big-label';

const YokaiCard = ({ context, match }) => {
    const yokai = context.getYokai(match.params.name);
    const color = utils.getColor(tribes, yokai.tribe);

    const elementColor = utils.getColor(elements, yokai.element);
    const elementSecondaryColor = utils.getSecondaryColor(
        elements,
        yokai.element
    );

    return (
        <Global.Container>
            {yokai && (
                <>
                    <Helmet>
                        <title>{`${
                            yokai.name
                        } | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
                        <meta
                            name="description"
                            content={`${yokai.name} is a yo-kai from ${
                                yokai.tribe
                            } tribe, of the rank ${
                                yokai.rank
                            } and with the attribute ${
                                yokai.element
                            } in Yo-kai Watch ${context.gameVersion}`}
                        />
                        <meta name="og:image" content={yokai.image} />
                    </Helmet>
                    <Image
                        imageUrl={yokai.image}
                        altText={yokai.name}
                        size="large"
                    />
                    <SideInformation>
                        <h2>#{yokai.yokaiNumber}</h2>
                        <Image
                            imageUrl={utils.getImage(ranks, yokai.rank)}
                            altText={yokai.rank}
                            size="small"
                        />
                    </SideInformation>

                    <Global.Section isRow justifyContent="space-evenly">
                        <BigLabel backgroundColor={color} text2={yokai.tribe}>
                            <Image
                                imageUrl={utils.getImage(tribes, yokai.tribe)}
                                altText={yokai.tribe}
                                size="small"
                            />
                        </BigLabel>

                        {yokai.tribe !== 'Boss' && (
                            <BigLabel
                                backgroundColor={elementColor}
                                color={elementSecondaryColor}
                                text2={yokai.element}
                            >
                                <Image
                                    imageUrl={utils.getImage(
                                        elements,
                                        yokai.element
                                    )}
                                    altText={yokai.element}
                                    size="small"
                                />
                            </BigLabel>
                        )}
                    </Global.Section>

                    <Card title="Bio" color={color}>
                        {yokai.description}
                    </Card>

                    {yokai.tribe !== 'Boss' && (
                        <>
                            <Card title="Favourite food" color={color}>
                                <Image
                                    imageUrl={utils.getImage(
                                        foods,
                                        yokai.favouriteFood
                                    )}
                                    altText={yokai.favouriteFood}
                                    size="special"
                                />
                                {yokai.favouriteFood}
                            </Card>

                            <Card title="Locations" color={color}>
                                <Image
                                    imageUrl={utils.getImage(
                                        foods,
                                        yokai.favouriteFood
                                    )}
                                    altText={yokai.favouriteFood}
                                    size="special"
                                />
                                {yokai.locations.map((location, index) => (
                                    <div key={index}>{location}</div>
                                ))}
                            </Card>

                            <Evolution
                                yokai={yokai}
                                color={color}
                                gameVersion={context.gameVersion}
                            />
                            <Seal
                                yokai={yokai}
                                color={color}
                                gameVersion={context.gameVersion}
                            />
                            <Moves yokai={yokai} color={color} />
                            <Stats yokai={yokai} color={color} />
                        </>
                    )}
                </>
            )}
        </Global.Container>
    );
};

export default withRouter(withGameVersionContext(withYokaisContext(YokaiCard)));
