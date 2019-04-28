import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Container,
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

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tribe: [],
            rank: [],
            element: [],
            misc: [],
            name: '',
            isCollapsed: true,
            pageNumber: 0,
            yokaisToShow: 15,
            isCollapsedFilterTribes: true,
            isCollapsedFilterRanks: true,
            isCollapsedFilterElements: true,
            isCollapsedFilterMisc: true
        };

        this.handleText = this.handleText.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

    goTo(name, tribe = '') {
        const { gameVersion, history } = this.props;
        let nameUrl = name;
        if (tribe === 'boss') nameUrl += `_${tribe}`;

        history.push(`/yokai-watch-${gameVersion}/yokais/${nameUrl}`);
    }

    handleText(event) {
        this.setState({ name: event.target.value.toLowerCase() });
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

    // eslint-disable-next-line
    handleFormSubmit(event) {
        event.preventDefault();
    }

    handleScroll() {
        const { pageNumber } = this.state;

        if (
            window.innerHeight + window.pageYOffset >
            this.listref.current.clientHeight
        ) {
            this.setState({ pageNumber: pageNumber + 1 });
        }
    }

    render() {
        const {
            name,
            isCollapsed,
            pageNumber,
            yokaisToShow,
            isCollapsedFilterTribes,
            isCollapsedFilterRanks,
            isCollapsedFilterElements,
            isCollapsedFilterMisc
        } = this.state;
        const {
            yokais,
            gameVersion,
            handleResetFilter,
            handleCheckbox,
            tribe,
            rank,
            element,
            misc
        } = this.props;

        return (
            <Container ref={this.listref}>
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
                <form onSubmit={this.handleFormSubmit}>
                    <Input
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.handleText}
                        placeholder="Find your yokai by name"
                    >
                        <FontAwesomeIcon icon="search" />
                    </Input>
                    <Collapsible isCollapsed={isCollapsed}>
                        <FilterButtons>
                            <Button
                                onClick={this.handleCollapse}
                                type="button"
                                label="Filters"
                                style={{ width: '160px' }}
                            >
                                <FontAwesomeIcon icon="filter" />
                            </Button>
                            <Button
                                type="button"
                                onClick={handleResetFilter}
                                label="Reset Filters"
                                style={{ width: '160px' }}
                            >
                                <FontAwesomeIcon icon="trash-alt" />
                            </Button>
                        </FilterButtons>
                        <Filters>
                            <Column>
                                <SpecialHeader
                                    onClick={this.handleOpenFilterTribes}
                                >
                                    <h2>Tribes</h2>
                                    <FontAwesomeIcon icon="plus" />
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
                                                    checked={tribe.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="tribe"
                                                    onChange={handleCheckbox}
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
                                    <FontAwesomeIcon icon="plus" />
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
                                                    checked={rank.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="rank"
                                                    onChange={handleCheckbox}
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
                                    <FontAwesomeIcon icon="plus" />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterElements}
                                >
                                    {elementsFilters.map(type => (
                                        <InputContainer key={type}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={element.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="element"
                                                    onChange={handleCheckbox}
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
                                    <FontAwesomeIcon icon="plus" />
                                </SpecialHeader>
                                <CollapsibleFilters
                                    isCollapsed={isCollapsedFilterMisc}
                                >
                                    {miscFilters.map(type => (
                                        <InputContainer key={type}>
                                            <label>
                                                <Checkbox
                                                    type="checkbox"
                                                    checked={misc.includes(
                                                        type.toLowerCase()
                                                    )}
                                                    name={type}
                                                    checkboxtype="misc"
                                                    onChange={handleCheckbox}
                                                    label={type}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </CollapsibleFilters>
                            </Column>
                        </Filters>
                    </Collapsible>
                    {yokais
                        .filter(yokai => {
                            let aux = true;

                            const filters = {
                                tribe,
                                rank,
                                element
                            };

                            if (!yokai.name.toLowerCase().includes(name)) {
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
                                misc.includes('has evolution') &&
                                !yokai.evolutionIndexes
                            ) {
                                return false;
                            }

                            if (
                                misc.includes('legendary') &&
                                yokai.seal === undefined
                            ) {
                                return false;
                            }

                            if (
                                misc.includes('rare') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('rare')))
                            ) {
                                return false;
                            }

                            if (
                                misc.includes('classic') &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes('classic')))
                            ) {
                                return false;
                            }

                            if (
                                misc.includes("'merican legendary") &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes(
                                            "'merican legendary"
                                        )))
                            ) {
                                return false;
                            }

                            if (
                                misc.includes("'merican") &&
                                (yokai.type === undefined ||
                                    (yokai.type &&
                                        !yokai.type.includes("'merican")))
                            ) {
                                return false;
                            }

                            if (
                                misc.includes('deva') &&
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
                                    to={`/yokai-watch-${gameVersion}/yokais/${
                                        yokai.name
                                    }`}
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
                </form>
            </Container>
        );
    }
}

export default withRouter(Main);
