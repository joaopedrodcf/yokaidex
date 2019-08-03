import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Search from 'react-feather/dist/icons/search';
import Filter from 'react-feather/dist/icons/filter';
import Trash2 from 'react-feather/dist/icons/trash-2';
import Plus from 'react-feather/dist/icons/plus';
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
import {
    withGameVersionContext,
    withYokaisContext,
    withFilterMainContext
} from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const buttonStyle = { width: '160px' };

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true,
            pageNumber: 0,
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

        this.listref = React.createRef();
        this.yokaisToShow = 15;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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

    handleScroll = () => {
        const { pageNumber } = this.state;

        if (
            window.innerHeight + window.pageYOffset >
            this.listref.current.clientHeight - 400
        ) {
            this.setState({ pageNumber: pageNumber + 1 });
        }
    };

    handleOpenFilter(filterType) {
        this.setState(state => ({
            [filterType]: !state[filterType]
        }));
    }

    render() {
        const {
            isCollapsed,
            pageNumber,
            isCollapsedFilterTribes,
            isCollapsedFilterRanks,
            isCollapsedFilterElements,
            isCollapsedFilterMisc,
            isCollapsedFilterTypes
        } = this.state;
        const { context } = this.props;
        return (
            <Global.Container ref={this.listref}>
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
                    {context.yokais
                        .filter(yokai => {
                            let aux = true;

                            const filters = {
                                tribe: context.tribe,
                                rank: context.rank,
                                element: context.element
                            };

                            if (
                                !yokai.name.toLowerCase().includes(context.name)
                            ) {
                                return false;
                            }

                            Object.keys(filters).forEach(el => {
                                if (
                                    filters[el].length > 0 &&
                                    !filters[el].includes(
                                        yokai[el].toLowerCase()
                                    )
                                ) {
                                    aux = false;
                                }
                            });

                            if (
                                context.misc.includes('has evolution') &&
                                !yokai.evolutionIndexes
                            ) {
                                return false;
                            }

                            if (
                                context.misc.includes('crank-a-kai') &&
                                !yokai.crankakai
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('legendary') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('legendary')))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('rare') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('rare')))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('classic') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('classic')))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('deva') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('deva')))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes("'merican legendary") &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes(
                                            "'merican legendary"
                                        )))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes("'merican") &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes("'merican")))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('legendary mystery') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes(
                                            'legendary mystery'
                                        )))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('treasure') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('treasure')))
                            ) {
                                return false;
                            }

                            if (
                                context.types.includes('pioneer') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('pioneer')))
                            ) {
                                return false;
                            }

                            return aux;
                        })
                        .slice(0, (pageNumber + 1) * this.yokaisToShow)
                        .map(yokai => (
                            <Section key={yokai.name + yokai.tribe}>
                                <Link
                                    to={`/yokai-watch-${
                                        context.gameVersion
                                    }/yokais/${utils.uniformizeNames(
                                        yokai.name,
                                        yokai.tribe
                                    )}`}
                                >
                                    <SectionWrapper
                                        style={this.getGradientTribe(
                                            yokai.tribe
                                        )}
                                    >
                                        <SectionImageTitle>
                                            <Image
                                                imageUrl={yokai.image}
                                                altText={yokai.name}
                                                size="medium"
                                                isThumbnail
                                                isToLazyLoad
                                            />
                                            {yokai.name}
                                        </SectionImageTitle>
                                        <Row alignItems="center">
                                            #{yokai.yokaiNumber}
                                        </Row>
                                        <Row alignItems="center">
                                            <Image
                                                imageUrl={utils.getImage(
                                                    tribes,
                                                    yokai.tribe
                                                )}
                                                altText={yokai.tribe}
                                                size="small"
                                            />
                                        </Row>
                                        <Row alignItems="center">
                                            <Image
                                                imageUrl={utils.getImage(
                                                    elements,
                                                    yokai.element
                                                )}
                                                altText={yokai.element}
                                                size="small"
                                            />
                                        </Row>
                                        <Row alignItems="center">
                                            <Image
                                                imageUrl={utils.getImage(
                                                    ranks,
                                                    yokai.rank
                                                )}
                                                altText={yokai.rank}
                                                size="small"
                                            />
                                        </Row>
                                    </SectionWrapper>
                                </Link>
                            </Section>
                        ))}
                </Form>
            </Global.Container>
        );
    }
}

export default withRouter(
    withGameVersionContext(
        withYokaisContext(withFilterMainContext(withTracker(Main)))
    )
);
