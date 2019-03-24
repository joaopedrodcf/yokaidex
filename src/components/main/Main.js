/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
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
import SCInput from '../shared/input';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tribe: [],
            rank: [],
            element: [],
            misc: [],
            name: '',
            sort: '',
            orderAsc: true,
            isCollapsed: true,
            pageNumber: 0,
            yokaisToShow: 50
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    goTo(name, tribe) {
        const { gameVersion } = this.props;
        let nameUrl = name;
        if (tribe === 'boss') nameUrl += `_${tribe}`;

        this.props.history.push(
            `/yokai-watch-${gameVersion}/yokais/${nameUrl}`
        );
    }

    handleResetFilter() {
        this.setState({ tribe: [], rank: [], element: [] });
    }

    handleCheckbox(event) {
        const checkboxtype = event.target.getAttribute('data-checkbox-type');
        const type = event.target.name.toLowerCase();
        const { checked } = event.target;
        const filterType = this.state[checkboxtype];

        if (checked) {
            filterType.push(type);
        } else {
            filterType.splice(filterType.indexOf(type), 1);
        }

        this.setState({
            [checkboxtype]: filterType
        });
    }

    handleText(event) {
        this.setState({ name: event.target.value.toLowerCase() });
    }

    handleSort(event) {
        const thtype = event.currentTarget.getAttribute('thtype');
        const { sort, orderAsc } = this.state;

        this.setState({
            sort: thtype,
            orderAsc: sort === thtype || sort === '' ? !orderAsc : true
        });
    }

    handleCollapse() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    // eslint-disable-next-line
    handleFormSubmit(event) {
        event.preventDefault();
    }

    handleScroll() {
        const scrollTopHalfSize = 3000;
        const { pageNumber } = this.state;

        if (window.pageYOffset > scrollTopHalfSize * (pageNumber + 1)) {
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
            sort,
            orderAsc,
            isCollapsed,
            pageNumber,
            yokaisToShow,
            gameVersion
        } = this.state;
        const { yokais } = this.props;
        const tribesCheckbox = [
            'Brave',
            'Charming',
            'Eerie',
            'Heartful',
            'Mysterious',
            'Shady',
            'Slippery',
            'Tough',
            'Wicked',
            'Enma',
            'Wandroid',
            'Boss'
        ];
        const ranksCheckbox = ['S', 'A', 'B', 'C', 'D', 'E'];
        const elementsCheckbox = [
            'Drain',
            'Earth',
            'Fire',
            'Ice',
            'Lightning',
            'Restoration',
            'Water',
            'Wind'
        ];

        const miscCheckbox = ['has evolution', 'is legendary'];

        return (
            <Container>
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
                    <SCInput
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleText}
                        placeholder="Find your yokai by name"
                    >
                        <FontAwesomeIcon icon="search" />
                    </SCInput>
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
                                {tribesCheckbox.map(type => (
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
                                {ranksCheckbox.map(type => (
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
                                {elementsCheckbox.map(type => (
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
                                {miscCheckbox.map(type => (
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
                        .sort((a, b) => {
                            if (sort === '') {
                                return 0;
                            }

                            const nameA = a[sort].toLowerCase();
                            const nameB = b[sort].toLowerCase();

                            if (orderAsc) {
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }
                            } else {
                                if (nameA > nameB) {
                                    return -1;
                                }
                                if (nameA < nameB) {
                                    return 1;
                                }
                            }

                            return 0;
                        })
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
                                misc.includes('is legendary') &&
                                yokai.seal === undefined
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
