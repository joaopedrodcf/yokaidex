/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, ContainerSeal, SealElements } from './style';
import Image from '../../components/shared/image';
import { withGameVersionContext, withCrankakaisContext } from '../../store';
import utils from '../../components/utils';

const Crankakai = ({ context }) => {
    return (
        <Container>
            <Helmet>
                <title>
                    Crankakai | Yokaidex - Where you can find all the
                    information from Yo-kai Watch games!
                </title>
            </Helmet>

            <ContainerSeal>
                {context.crankakais.map((item, index) => (
                    <SealElements key={index}>
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
        </Container>
    );
};

export default withGameVersionContext(withCrankakaisContext(Crankakai));
