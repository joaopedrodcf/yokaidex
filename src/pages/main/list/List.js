import React from 'react';
import { Link } from 'react-router-dom';
import { List as VirtualizedList, AutoSizer } from 'react-virtualized';
import { Section, SectionWrapper, Row, SectionImageTitle } from './style';
import utils from '../../../components/utils';
import { elements, ranks, tribes } from '../../../mocks';
import Image from '../../../components/shared/image';

const rowHeight = 109 + 12;

const List = ({ gameVersion, yokais }) => {
    const getGradientTribe = tribe => {
        return {
            background: `linear-gradient(to bottom, ${utils.getGradientColor(
                tribes,
                tribe
            )})`
        };
    };

    // We can remove the Section if we style the Link
    const renderRow = ({ index, key, style }) => {
        return (
            <Section key={key} style={style}>
                <Link
                    to={`/yokai-watch-${gameVersion}/yokais/${utils.uniformizeNames(
                        yokais[index].name,
                        yokais[index].tribe
                    )}`}
                >
                    <SectionWrapper
                        style={getGradientTribe(yokais[index].tribe)}
                    >
                        <SectionImageTitle>
                            <Image
                                imageUrl={yokais[index].image}
                                altText={yokais[index].name}
                                size="medium"
                                isThumbnail
                                isToLazyLoad
                            />
                            {yokais[index].name}
                        </SectionImageTitle>
                        <Row alignItems="center">
                            #{yokais[index].yokaiNumber}
                        </Row>
                        <Row alignItems="center">
                            <Image
                                imageUrl={utils.getImage(
                                    tribes,
                                    yokais[index].tribe
                                )}
                                altText={yokais[index].tribe}
                                size="small"
                            />
                        </Row>
                        <Row alignItems="center">
                            <Image
                                imageUrl={utils.getImage(
                                    elements,
                                    yokais[index].element
                                )}
                                altText={yokais[index].element}
                                size="small"
                            />
                        </Row>
                        <Row alignItems="center">
                            <Image
                                imageUrl={utils.getImage(
                                    ranks,
                                    yokais[index].rank
                                )}
                                altText={yokais[index].rank}
                                size="small"
                            />
                        </Row>
                    </SectionWrapper>
                </Link>
            </Section>
        );
    };

    return (
        <AutoSizer>
            {({ width, height }) => {
                return (
                    <VirtualizedList
                        width={width}
                        height={height}
                        rowHeight={rowHeight}
                        rowRenderer={renderRow}
                        rowCount={yokais.length}
                        overscanRowCount={12}
                    />
                );
            }}
        </AutoSizer>
    );
};

export default React.memo(List);
