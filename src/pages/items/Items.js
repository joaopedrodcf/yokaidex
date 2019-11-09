import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from 'react-feather/dist/icons/search';
import { Helmet } from 'react-helmet';
import { List, AutoSizer } from 'react-virtualized';
import {
    Section,
    SectionWrapper,
    SectionText,
    InputContainer,
    InputContainerWrap,
    Form
} from './style';
import Image from '../../components/shared/image';
import Input from '../../components/shared/input';
import utils from '../../components/utils';
import { withGameVersionContext, withItemsContext } from '../../store';
import { items as itemsFilters } from '../../mocks/filters';
import Checkbox from '../../components/shared/checkbox';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const rowHeight = 74 + 12;

class Items extends Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
    };

    renderRow({ index, key, style }) {
        const { context } = this.props;
        return (
            <Section key={key} style={style}>
                <Link
                    to={`/yokai-watch-${
                        context.gameVersion
                    }/items/${utils.uniformizeNames(
                        context.items[index].name
                    )}`}
                >
                    <SectionWrapper>
                        <Image
                            imageUrl={context.items[index].image}
                            altText={context.items[index].name}
                            size="medium"
                            isToLazyLoad
                        />
                        <SectionText>{context.items[index].name}</SectionText>
                    </SectionWrapper>
                </Link>
            </Section>
        );
    }

    render() {
        const { context } = this.props;
        // To improve add fiters by type of item

        return (
            <Global.Container>
                <Helmet>
                    <title>
                        Items | Yokaidex - Where you can find all the
                        information from Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content={`Items that can be collected in Yo-kai Watch ${context.gameVersion}`}
                    />
                </Helmet>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        id="name"
                        name="name"
                        value={context.name}
                        onChange={context.handleText}
                        placeholder="Find your item by name"
                    >
                        <Search />
                    </Input>
                    <InputContainerWrap>
                        {itemsFilters.map((item, index) => (
                            <InputContainer key={index}>
                                <label>
                                    <Checkbox
                                        type="checkbox"
                                        checked={context.selectedFilterItems.includes(
                                            item.toLowerCase()
                                        )}
                                        name={item}
                                        onChange={context.handleCheckbox}
                                        label={item}
                                    />
                                </label>
                            </InputContainer>
                        ))}
                    </InputContainerWrap>

                    <AutoSizer>
                        {({ width, height }) => {
                            return (
                                <List
                                    width={width}
                                    height={height}
                                    rowHeight={rowHeight}
                                    rowRenderer={this.renderRow}
                                    rowCount={context.items.length}
                                    overscanRowCount={12}
                                />
                            );
                        }}
                    </AutoSizer>
                </Form>
            </Global.Container>
        );
    }
}

export default withGameVersionContext(withItemsContext(withTracker(Items)));
