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
    misc as miscFilters
} from '../../mocks/filters';
import {
    withGameVersionContext,
    withYokaisContext,
    withFilterMainContext
} from '../../store';
import Global from '../../styles';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true,
            pageNumber: 0,
            yokaisToShow: 15,
            isCollapsedFilterTribes: true,
            isCollapsedFilterRanks: true,
            isCollapsedFilterElements: true,
            isCollapsedFilterMisc: true
        };

        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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

        this.listref = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleCollapse() {
        const { isCollapsed } = this.state;

        this.setState({ isCollapsed: !isCollapsed });
    }

    handleOpenFilter(filterType) {
        this.setState(state => ({
            [filterType]: !state[filterType]
        }));
    }

    handleScroll() {
        const { pageNumber } = this.state;

        if (
            window.innerHeight + window.pageYOffset >
            this.listref.current.clientHeight - 400
        ) {
            this.setState({ pageNumber: pageNumber + 1 });
        }
    }

    render() {
        const {
            isCollapsed,
            pageNumber,
            yokaisToShow,
            isCollapsedFilterTribes,
            isCollapsedFilterRanks,
            isCollapsedFilterElements,
            isCollapsedFilterMisc
        } = this.state;
        const { context } = this.props;

        return (
            <Global.Container ref={this.listref}>
                <Helmet>
                    <title>
                        Yokaidex - Where you can find all the information from
                        Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content="Contains all yo-kais for Yo-kai Watch, their locations, stats, favorite foods, skills and evolutions."
                    />
                </Helmet>
                <Form
                    onSubmit={event => {
                        event.preventDefault();
                    }}
                >
                    <Input
                        id="name"
                        name="name"
                        value={context.name}
                        onChange={context.handleText}
                        placeholder="Find your yokai by name"
                    >
                        <Search />
                    </Input>
                    <Collapsible isCollapsed={isCollapsed}>
                        <FilterButtons>
                            <Button
                                onClick={this.handleCollapse}
                                type="button"
                                label="Filters"
                                style={{ width: '160px' }}
                            >
                                <Filter size={18} />
                            </Button>
                            <Button
                                type="button"
                                onClick={context.handleResetFilter}
                                label="Reset Filters"
                                style={{ width: '160px' }}
                            >
                                <Trash2 size={18} />
                            </Button>
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

                            Object.keys(filters).forEach(type => {
                                if (
                                    filters[type].length > 0 &&
                                    !filters[type].includes(
                                        yokai[type].toLowerCase()
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
                                context.misc.includes('legendary') &&
                                yokai.seal === undefined
                            ) {
                                return false;
                            }

                            if (
                                context.misc.includes('rare') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('rare')))
                            ) {
                                return false;
                            }

                            if (
                                context.misc.includes('classic') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('classic')))
                            ) {
                                return false;
                            }

                            if (
                                context.misc.includes("'merican legendary") &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes(
                                            "'merican legendary"
                                        )))
                            ) {
                                return false;
                            }

                            if (
                                context.misc.includes("'merican") &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes("'merican")))
                            ) {
                                return false;
                            }

                            if (
                                context.misc.includes('deva') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('deva')))
                            ) {
                                return false;
                            }

                            return aux;
                        })
                        .slice(0, (pageNumber + 1) * yokaisToShow)
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
                                        style={{
                                            background: `linear-gradient(to bottom, ${utils.getGradientColor(
                                                tribes,
                                                yokai.tribe
                                            )})`
                                        }}
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
    withGameVersionContext(withYokaisContext(withFilterMainContext(Main)))
);
