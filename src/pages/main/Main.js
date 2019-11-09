import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Search from 'react-feather/dist/icons/search';
import Filter from 'react-feather/dist/icons/filter';
import Trash2 from 'react-feather/dist/icons/trash-2';
import Plus from 'react-feather/dist/icons/plus';
import { List, AutoSizer } from 'react-virtualized';
import {
    Form,
    Filters,
    InputContainer,
    Collapsible,
    SpecialHeader,
    Column,
    FilterButtons,
    Section,
    SectionWrapper,
    Row,
    CollapsibleFilters,
    SectionImageTitle
} from './style';
import Button from '../../components/shared/button';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import { elements, ranks, tribes } from '../../mocks';
import Checkbox from '../../components/shared/checkbox';
import Input from '../../components/shared/input';
import {
    elements as elementsFilters,
    ranks as ranksfilters,
    tribes as tribesFilters,
    misc as miscFilters,
    types as typesFilters
} from '../../mocks/filters';
import { withGameVersionContext, withYokaisContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const buttonStyle = { width: '160px' };
const rowHeight = 109 + 12;

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true,
            isCollapsedFilterTribes: true,
            isCollapsedFilterRanks: true,
            isCollapsedFilterElements: true,
            isCollapsedFilterMisc: true,
            isCollapsedFilterTypes: true
        };

        this.handleOpenFilterTribes = this.handleOpenFilter.bind(
            this,
            'isCollapsedFilterTribes'
        );
        this.handleOpenFilterRanks = this.handleOpenFilter.bind(
            this,
            'isCollapsedFilterRanks'
        );
        this.handleOpenFilterElements = this.handleOpenFilter.bind(
            this,
            'isCollapsedFilterElements'
        );
        this.handleOpenFilterMisc = this.handleOpenFilter.bind(
            this,
            'isCollapsedFilterMisc'
        );
        this.handleOpenFilterTypes = this.handleOpenFilter.bind(
            this,
            'isCollapsedFilterTypes'
        );
        this.renderRow = this.renderRow.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
    };

    getGradientTribe = tribe => {
        return {
            background: `linear-gradient(to bottom, ${utils.getGradientColor(
                tribes,
                tribe
            )})`
        };
    };

    handleCollapse = () => {
        const { isCollapsed } = this.state;

        this.setState({ isCollapsed: !isCollapsed });
    };

    handleOpenFilter(filterType) {
        this.setState(state => ({
            [filterType]: !state[filterType]
        }));
    }

    renderRow({ index, key, style }) {
        const { context } = this.props;
        return (
            <Section key={key} style={style}>
                <Link
                    to={`/yokai-watch-${
                        context.gameVersion
                    }/yokais/${utils.uniformizeNames(
                        context.yokais[index].name,
                        context.yokais[index].tribe
                    )}`}
                >
                    <SectionWrapper
                        style={this.getGradientTribe(
                            context.yokais[index].tribe
                        )}
                    >
                        <SectionImageTitle>
                            <Image
                                imageUrl={context.yokais[index].image}
                                altText={context.yokais[index].name}
                                size="medium"
                                isThumbnail
                                isToLazyLoad
                            />
                            {context.yokais[index].name}
                        </SectionImageTitle>
                        <Row alignItems="center">
                            #{context.yokais[index].yokaiNumber}
                        </Row>
                        <Row alignItems="center">
                            <Image
                                imageUrl={utils.getImage(
                                    tribes,
                                    context.yokais[index].tribe
                                )}
                                altText={context.yokais[index].tribe}
                                size="small"
                            />
                        </Row>
                        <Row alignItems="center">
                            <Image
                                imageUrl={utils.getImage(
                                    elements,
                                    context.yokais[index].element
                                )}
                                altText={context.yokais[index].element}
                                size="small"
                            />
                        </Row>
                        <Row alignItems="center">
                            <Image
                                imageUrl={utils.getImage(
                                    ranks,
                                    context.yokais[index].rank
                                )}
                                altText={context.yokais[index].rank}
                                size="small"
                            />
                        </Row>
                    </SectionWrapper>
                </Link>
            </Section>
        );
    }

    render() {
        const {
            isCollapsed,
            isCollapsedFilterTribes,
            isCollapsedFilterRanks,
            isCollapsedFilterElements,
            isCollapsedFilterMisc,
            isCollapsedFilterTypes
        } = this.state;
        const { context } = this.props;
        return (
            <Global.Container>
                <Helmet>
                    <title>
                        Yokaidex Where you can find all the information from
                        Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content="Contains all yo-kais for Yo-kai Watch, their locations, stats, favorite foods, skills and evolutions."
                    />
                </Helmet>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        id="name"
                        name="name"
                        value={context.name}
                        onChange={context.handleText}
                        placeholder="Find your yokai by name"
                        aria-label="Find your yokai by name"
                    >
                        <Search />
                    </Input>
                    <Collapsible isCollapsed={isCollapsed}>
                        <FilterButtons>
                            <Button
                                onClick={this.handleCollapse}
                                type="button"
                                label="Filters"
                                style={buttonStyle}
                            >
                                <Filter size={18} />
                            </Button>
                            {(context.tribe.length > 0 ||
                                context.rank.length > 0 ||
                                context.element.length > 0 ||
                                context.types.length > 0 ||
                                context.misc.length > 0) && (
                                <Button
                                    type="button"
                                    onClick={context.handleResetFilter}
                                    label="Reset Filters"
                                    style={buttonStyle}
                                >
                                    <Trash2 size={18} />
                                </Button>
                            )}
                        </FilterButtons>
                        <Filters>
                            <Column>
                                <SpecialHeader
                                    onClick={this.handleOpenFilterTribes}
                                >
                                    <h2>Tribes</h2>
                                    <Plus />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterTribes}
                                    checkboxtype="tribe"
                                >
                                    {tribesFilters.map(type => (
                                        <InputContainer key={type}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={context.tribe.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="tribe"
                                                    onChange={
                                                        context.handleCheckbox
                                                    }
                                                    label={type}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </CollapsibleFilters>
                            </Column>
                            <Column>
                                <SpecialHeader
                                    onClick={this.handleOpenFilterRanks}
                                >
                                    <h2>Ranks</h2>
                                    <Plus />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterRanks}
                                    isToWrap
                                >
                                    {ranksfilters.map(type => (
                                        <InputContainer key={type}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={context.rank.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="rank"
                                                    onChange={
                                                        context.handleCheckbox
                                                    }
                                                    label={type}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </CollapsibleFilters>
                            </Column>
                            <Column>
                                <SpecialHeader
                                    onClick={this.handleOpenFilterElements}
                                >
                                    <h2>Elements</h2>
                                    <Plus />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterElements}
                                >
                                    {elementsFilters.map(type => (
                                        <InputContainer key={type}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={context.element.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="element"
                                                    onChange={
                                                        context.handleCheckbox
                                                    }
                                                    label={type}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </CollapsibleFilters>
                            </Column>
                            <Column>
                                <SpecialHeader
                                    onClick={this.handleOpenFilterTypes}
                                >
                                    <h2>Types</h2>
                                    <Plus />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterTypes}
                                >
                                    {typesFilters.map(el => (
                                        <InputContainer key={el}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={context.types.includes(
                                                        el.toLowerCase()
                                                    )}
                                                    name={el}
                                                    checkboxtype="types"
                                                    onChange={
                                                        context.handleCheckbox
                                                    }
                                                    label={el}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </CollapsibleFilters>
                            </Column>
                            <Column>
                                <SpecialHeader
                                    onClick={this.handleOpenFilterMisc}
                                >
                                    <h2>Misc</h2>
                                    <Plus />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterMisc}
                                >
                                    {miscFilters.map(type => (
                                        <InputContainer key={type}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={context.misc.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="misc"
                                                    onChange={
                                                        context.handleCheckbox
                                                    }
                                                    label={type}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </CollapsibleFilters>
                            </Column>
                        </Filters>
                    </Collapsible>

                    <AutoSizer>
                        {({ width, height }) => {
                            return (
                                <List
                                    width={width}
                                    height={height}
                                    rowHeight={rowHeight}
                                    rowRenderer={this.renderRow}
                                    rowCount={context.yokais.length}
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

export default withRouter(
    withGameVersionContext(withYokaisContext(withTracker(Main)))
);
