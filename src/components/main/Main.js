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
    Sections,
    STable,
    Row
} from './style';
import Button from '../shared/button';
import Image from '../shared/image';
import utils from '../utils';
import { elements, ranks, tribes } from '../../mocks';
import Checkbox from '../shared/checkbox';
import Input from '../shared/input';
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
            yokaisToShow: 15
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

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

    handleResetFilter() {
        this.setState({ tribe: [], rank: [], element: [] });
    }

    handleCheckbox(event) {
        const { checked } = event.target;
        const checkboxtype = event.target.getAttribute('data-checkbox-type');
        const nameLowerCase = event.target.name.toLowerCase();

        if (checked) {
            this.setState(state => ({
                [checkboxtype]: [...state[checkboxtype], nameLowerCase]
            }));
        } else {
            this.setState(state => ({
                [checkboxtype]: state[checkboxtype].filter(
                    element => element !== nameLowerCase
                )
            }));
        }
    }

    handleText(event) {
        this.setState({ name: event.target.value.toLowerCase() });
    }

    handleCollapse() {
        const { isCollapsed } = this.state;

        this.setState({ isCollapsed: !isCollapsed });
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
            tribe,
            rank,
            element,
            misc,
            name,
            isCollapsed,
            pageNumber,
            yokaisToShow
        } = this.state;
        const { yokais, gameVersion } = this.props;

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
                                onClick={this.handleResetFilter}
                                label="
                            Reset Filters"
                                style={{ width: '160px' }}
                            >
                                <FontAwesomeIcon icon="trash-alt" />
                            </Button>
                        </FilterButtons>
                        <Filters>
                            <Column>
                                <SpecialHeader>
                                    <h2>Tribes</h2>
                                </SpecialHeader>
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
                                                onChange={this.handleCheckbox}
                                                label={type}
                                            />
                                        </label>
                                    </InputContainer>
                                ))}
                            </Column>
                            <Column>
                                <SpecialHeader>
                                    <h2>Ranks</h2>
                                </SpecialHeader>
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
                                                onChange={this.handleCheckbox}
                                                label={type}
                                            />
                                        </label>
                                    </InputContainer>
                                ))}
                            </Column>
                            <Column>
                                <SpecialHeader>
                                    <h2>Elements</h2>
                                </SpecialHeader>
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
                                                onChange={this.handleCheckbox}
                                                label={type}
                                            />
                                        </label>
                                    </InputContainer>
                                ))}
                            </Column>
                            <Column>
                                <SpecialHeader>
                                    <h2>Misc</h2>
                                </SpecialHeader>
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
                                                onChange={this.handleCheckbox}
                                                label={type}
                                            />
                                        </label>
                                    </InputContainer>
                                ))}
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
                            <Sections key={yokai.name + yokai.tribe}>
                                <Link
                                    to={`/yokai-watch-${gameVersion}/${
                                        yokai.name
                                    }`}
                                >
                                    <STable
                                        style={{
                                            background: `linear-gradient(to bottom, ${utils.getGradientColor(
                                                tribes,
                                                yokai.tribe
                                            )})`
                                        }}
                                    >
                                        <Column alignItems="center">
                                            <Image
                                                imageUrl={yokai.image}
                                                altText={yokai.name}
                                                size="medium"
                                                isThumbnail
                                                isToLazyLoad
                                            />
                                            {yokai.name}
                                        </Column>
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
                                    </STable>
                                </Link>
                            </Sections>
                        ))}
                </form>
            </Container>
        );
    }
}

export default withRouter(Main);
