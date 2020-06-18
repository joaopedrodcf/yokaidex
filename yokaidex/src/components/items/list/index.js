import React from 'react';
import { Link } from 'react-router-dom';
import { List as VirtualizedList, AutoSizer } from 'react-virtualized';
import { Section, SectionWrapper, SectionText } from './style';
import utils from '../../utils';
import Image from '../../shared/image';

const rowHeight = 74 + 12;

const List = ({ gameVersion, items }) => {
    // We can remove the Section if we style the Link
    const renderRow = ({ index, key, style }) => {
        return (
            <Section key={key} style={style}>
                <Link
                    to={`/yokai-watch-${gameVersion}/items/${utils.uniformizeNames(
                        items[index].name
                    )}`}
                >
                    <SectionWrapper>
                        <Image
                            imageUrl={items[index].image}
                            altText={items[index].name}
                            size="medium"
                            isToLazyLoad
                        />
                        <SectionText>{items[index].name}</SectionText>
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
                        rowCount={items.length}
                        overscanRowCount={12}
                    />
                );
            }}
        </AutoSizer>
    );
};

export default React.memo(List);
