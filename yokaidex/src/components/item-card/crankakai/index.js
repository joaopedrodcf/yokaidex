import React from 'react';
import { Link } from 'gatsby';
import { ContainerSeal, SealElements } from './style';
import utils from '../../utils';
import Global from '../../../styles';
import Image from '../../shared/image';

const Crankakai = ({ gameVersion, getCrankakai, crankakaiIndexes }) => {
    if (!crankakaiIndexes) {
        return null;
    }

    return (
        <>
            {gameVersion !== '3' &&
                getCrankakai(crankakaiIndexes).map(
                    (crankItem, sectionIndex) => (
                        <Global.Section key={sectionIndex}>
                            <Global.SectionHeader color="#ce93d8">
                                Crank-a-kai {crankItem.variation}
                            </Global.SectionHeader>
                            <Global.Card>
                                <Global.CardTitle color="#ce93d8">
                                    Prize
                                </Global.CardTitle>
                                <ContainerSeal>
                                    {crankItem.elements.map(
                                        (prize, elementIndex) => (
                                            <SealElements key={elementIndex}>
                                                <Link
                                                    to={`/yokai-watch-${gameVersion}/${
                                                        prize.type
                                                    }/${utils.uniformizeNames(
                                                        prize.name
                                                    )}`}
                                                >
                                                    <Image
                                                        imageUrl={prize.image}
                                                        altText=""
                                                        size="medium"
                                                    />
                                                    {prize.name}
                                                </Link>
                                            </SealElements>
                                        )
                                    )}
                                </ContainerSeal>
                            </Global.Card>
                        </Global.Section>
                    )
                )}
            {gameVersion === '3' &&
                getCrankakai(crankakaiIndexes).map(
                    (crankItem, sectionIndex) => (
                        <React.Fragment key={sectionIndex}>
                            {crankItem.first_prize.length > 0 && (
                                <Global.Section>
                                    <Global.SectionHeader color="#ce93d8">
                                        Crank-a-kai {crankItem.variation}
                                    </Global.SectionHeader>
                                    <Global.Card>
                                        <Global.CardTitle color="#ce93d8">
                                            First prize
                                        </Global.CardTitle>
                                        <ContainerSeal>
                                            {crankItem.first_prize.map(
                                                (prize, index) => (
                                                    <SealElements key={index}>
                                                        <Link
                                                            to={`/yokai-watch-${gameVersion}/${
                                                                prize.type
                                                            }/${utils.uniformizeNames(
                                                                prize.name
                                                            )}`}
                                                        >
                                                            <Image
                                                                imageUrl={
                                                                    prize.image
                                                                }
                                                                altText=""
                                                                size="medium"
                                                            />
                                                            {prize.name}
                                                        </Link>
                                                    </SealElements>
                                                )
                                            )}
                                        </ContainerSeal>
                                    </Global.Card>
                                </Global.Section>
                            )}
                            {crankItem.second_prize.length > 0 && (
                                <Global.Section>
                                    <Global.Card>
                                        <Global.CardTitle color="#ce93d8">
                                            Second prize
                                        </Global.CardTitle>

                                        <ContainerSeal>
                                            {crankItem.second_prize.map(
                                                (prize, index) => (
                                                    <SealElements key={index}>
                                                        <Link
                                                            to={`/yokai-watch-${gameVersion}/${
                                                                prize.type
                                                            }/${utils.uniformizeNames(
                                                                prize.name
                                                            )}`}
                                                        >
                                                            <Image
                                                                imageUrl={
                                                                    prize.image
                                                                }
                                                                altText=""
                                                                size="medium"
                                                            />
                                                            {prize.name}
                                                        </Link>
                                                    </SealElements>
                                                )
                                            )}
                                        </ContainerSeal>
                                    </Global.Card>
                                </Global.Section>
                            )}
                            {crankItem.third_prize.length > 0 && (
                                <Global.Section>
                                    <Global.Card>
                                        <Global.CardTitle color="#ce93d8">
                                            Third prize
                                        </Global.CardTitle>

                                        <ContainerSeal>
                                            {crankItem.third_prize.map(
                                                (prize, index) => (
                                                    <SealElements key={index}>
                                                        <Link
                                                            to={`/yokai-watch-${gameVersion}/${
                                                                prize.type
                                                            }/${utils.uniformizeNames(
                                                                prize.name
                                                            )}`}
                                                        >
                                                            <Image
                                                                imageUrl={
                                                                    prize.image
                                                                }
                                                                altText=""
                                                                size="medium"
                                                            />
                                                            {prize.name}
                                                        </Link>
                                                    </SealElements>
                                                )
                                            )}
                                        </ContainerSeal>
                                    </Global.Card>
                                </Global.Section>
                            )}
                            {crankItem.default_prize.length > 0 && (
                                <Global.Section>
                                    <Global.Card>
                                        <Global.CardTitle color="#ce93d8">
                                            Default prize
                                        </Global.CardTitle>
                                        <ContainerSeal>
                                            {crankItem.default_prize.map(
                                                (prize, index) => (
                                                    <SealElements key={index}>
                                                        <Link
                                                            to={`/yokai-watch-${gameVersion}/${
                                                                prize.type
                                                            }/${utils.uniformizeNames(
                                                                prize.name
                                                            )}`}
                                                        >
                                                            <Image
                                                                imageUrl={
                                                                    prize.image
                                                                }
                                                                altText=""
                                                                size="medium"
                                                            />
                                                            {prize.name}
                                                        </Link>
                                                    </SealElements>
                                                )
                                            )}
                                        </ContainerSeal>
                                    </Global.Card>
                                </Global.Section>
                            )}
                        </React.Fragment>
                    )
                )}
        </>
    );
};

export default React.memo(Crankakai);
