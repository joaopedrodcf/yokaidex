/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { SideInformation, Requirements, Requirement, Location } from './style';
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
import withTracker from '../../components/shared/with-tracker';

const YokaiCard = ({ context, match }) => {
    const yokai = context.getYokai(match.params.name);
    const color = utils.getColor(tribes, yokai.tribe);

    const elementColor = utils.getColor(elements, yokai.element);
    const elementSecondaryColor = utils.getSecondaryColor(
        elements,
        yokai.element
    );

    if (!yokai) {
        return (
            <Global.Container>Page not found please go back</Global.Container>
        );
    }

    return (
        <Global.Container>
            <Helmet>
                <title>{`${yokai.name} | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
                <meta
                    name="description"
                    content={`${yokai.name} is a yo-kai from ${yokai.tribe} tribe, of the rank ${yokai.rank} and with the attribute ${yokai.element} in Yo-kai Watch ${context.gameVersion}`}
                />
                <meta name="og:image" content={yokai.image} />
            </Helmet>
            <Image imageUrl={yokai.image} altText={yokai.name} size="large" />
            <SideInformation>
                <h2>#{yokai.yokaiNumber}</h2>
                <Image
                    imageUrl={utils.getImage(ranks, yokai.rank)}
                    altText={yokai.rank}
                    size="small"
                />
            </SideInformation>

            <Global.Section isRow justifyContent="space-evenly">
                {yokai.type &&
                    yokai.type.map((tp, index) => (
                        <BigLabel
                            key={index}
                            backgroundColor="#000000"
                            color="#ffee58"
                            text2={utils.capitalize(tp)}
                            withoutWith
                            justifyContent="center"
                        />
                    ))}
            </Global.Section>

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
                            imageUrl={utils.getImage(elements, yokai.element)}
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

                    {yokai.locations.length > 0 && (
                        <Card title="Locations" color={color}>
                            {yokai.locations.map((location, index) => (
                                <Location key={index}>{location}</Location>
                            ))}
                        </Card>
                    )}

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

                    {yokai.crankakai && (
                        <Global.Section>
                            <Global.SectionHeader color={color}>
                                Crank-a-kai
                            </Global.SectionHeader>

                            <Requirements>
                                {yokai.crankakai.map((coin, index) => (
                                    <Requirement key={index}>
                                        <Link
                                            to={`/yokai-watch-${
                                                context.gameVersion
                                            }/items/${utils.uniformizeNames(
                                                utils.removeLocation(coin.name)
                                            )}`}
                                        >
                                            <Image
                                                imageUrl={coin.image}
                                                altText=""
                                                size="medium"
                                            />
                                            {coin.name}
                                        </Link>
                                    </Requirement>
                                ))}
                            </Requirements>
                        </Global.Section>
                    )}

                    <Moves yokai={yokai} color={color} />
                    <Stats yokai={yokai} color={color} />
                </>
            )}
        </Global.Container>
    );
};

function areEqual(prevProps, nextProps) {
    if (prevProps.match.url === nextProps.match.url) return true;

    return false;
}

export default withRouter(
    withGameVersionContext(
        withYokaisContext(React.memo(withTracker(YokaiCard), areEqual))
    )
);
