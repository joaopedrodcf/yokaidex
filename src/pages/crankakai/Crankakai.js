/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ContainerSeal, SealElements } from './style';
import Image from '../../components/shared/image';
import { withGameVersionContext, withCrankakaisContext } from '../../store';
import utils from '../../components/utils';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const Crankakai = ({ context }) => {
    return (
        <Global.Container>
            <Helmet>
                <title>
                    Crankakai | Yokaidex - Where you can find all the
                    information from Yo-kai Watch games!
                </title>
            </Helmet>
            <ContainerSeal>
                {context.crankakais.map(item => (
                    <SealElements key={item.index}>
                        <Link
                            to={`/yokai-watch-${
                                context.gameVersion
                            }/items/${utils.uniformizeNames(item.type)}`}
                        >
                            <Image
                                imageUrl={item.image}
                                altText={item.type}
                                size="medium"
                                isToLazyLoad
                            />
                            {item.type} {item.variation}
                        </Link>
                    </SealElements>
                ))}
            </ContainerSeal>
        </Global.Container>
    );
};

export default withGameVersionContext(
    withCrankakaisContext(withTracker(Crankakai))
);
