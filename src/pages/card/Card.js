/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { SideInformation, STable, STableTitle, STableText } from './style';
import { elements, foods, ranks, tribes } from '../../mocks';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { withGameVersionContext, withYokaisContext } from '../../store';
import Global from '../../styles';
import Evolution from '../../components/evolution';
import Stats from '../../components/stats';
import Moves from '../../components/moves';
import Seal from '../../components/seal';

const Card = ({ context, match }) => {
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
                        <Global.BigLabel
                            backgroundColor={utils.getColor(
                                tribes,
                                yokai.tribe
                            )}
                        >
                            <Global.BigLabelContent>
                                <Image
                                    imageUrl={utils.getImage(
                                        tribes,
                                        yokai.tribe
                                    )}
                                    altText={yokai.tribe}
                                    size="small"
                                />
                            </Global.BigLabelContent>
                            <Global.BigLabelContent>
                                {yokai.tribe}
                            </Global.BigLabelContent>
                        </Global.BigLabel>

                        {yokai.tribe !== 'Boss' && (
                            <Global.BigLabel
                                backgroundColor={elementColor}
                                color={elementSecondaryColor}
                            >
                                <Global.BigLabelContent>
                                    <Image
                                        imageUrl={utils.getImage(
                                            elements,
                                            yokai.element
                                        )}
                                        altText={yokai.element}
                                        size="small"
                                    />
                                </Global.BigLabelContent>
                                <Global.BigLabelContent>
                                    {yokai.element}
                                </Global.BigLabelContent>
                            </Global.BigLabel>
                        )}
                    </Global.Section>

                    <Global.Section>
                        <STable>
                            <STableTitle color={color}>Bio</STableTitle>
                            <STableText bold>{yokai.description}</STableText>
                        </STable>
                    </Global.Section>

                    {yokai.tribe !== 'Boss' && (
                        <>
                            <Global.Section>
                                <STable>
                                    <STableTitle color={color}>
                                        Favourite food
                                    </STableTitle>
                                    <STableText>
                                        <Image
                                            imageUrl={utils.getImage(
                                                foods,
                                                yokai.favouriteFood
                                            )}
                                            altText={yokai.favouriteFood}
                                            size="special"
                                        />
                                        {yokai.favouriteFood}
                                    </STableText>
                                </STable>
                            </Global.Section>

                            <Global.Section>
                                <STable>
                                    <STableTitle color={color}>
                                        Locations
                                    </STableTitle>
                                    <STableText>
                                        {yokai.locations.map(
                                            (location, index) => (
                                                <div key={index}>
                                                    {location}
                                                </div>
                                            )
                                        )}
                                    </STableText>
                                </STable>
                            </Global.Section>

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

export default withRouter(withGameVersionContext(withYokaisContext(Card)));
