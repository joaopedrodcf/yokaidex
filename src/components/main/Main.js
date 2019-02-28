/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    Container,
    Filters,
    Table,
    InputContainer,
    Collapsible,
    ContainerHeader,
    SpecialHeader,
    Column,
    FilterButtons
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
        let nameUrl = name;
        if (tribe === 'boss') nameUrl += `_${tribe}`;

        this.props.history.push(`/yokai/${nameUrl}`);
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
            name,
            sort,
            orderAsc,
            isCollapsed,
            pageNumber,
            yokaisToShow
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
            'Boss'
        ];
        const ranksCheckbox = ['A', 'B', 'C', 'D', 'E', 'S'];
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

        return (
            <Container>
                <form onSubmit={this.handleFormSubmit}>
                    <ContainerHeader>
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
                                                    onChange={
                                                        this.handleCheckbox
                                                    }
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
                                                    onChange={
                                                        this.handleCheckbox
                                                    }
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
                                                    onChange={
                                                        this.handleCheckbox
                                                    }
                                                    label={type}
                                                />
                                            </label>
                                        </InputContainer>
                                    ))}
                                </Column>
                            </Filters>
                        </Collapsible>
                    </ContainerHeader>
                    <Table>
                        <thead>
                            <tr>
                                <th onClick={this.handleSort} thtype="name">
                                    Name
                                    {sort === 'name' ? (
                                        <FontAwesomeIcon
                                            icon={
                                                orderAsc
                                                    ? 'arrow-down'
                                                    : 'arrow-up'
                                            }
                                        />
                                    ) : null}
                                </th>

                                <th onClick={this.handleSort} thtype="tribe">
                                    Tribe
                                    {sort === 'tribe' ? (
                                        <FontAwesomeIcon
                                            icon={
                                                orderAsc
                                                    ? 'arrow-down'
                                                    : 'arrow-up'
                                            }
                                        />
                                    ) : null}
                                </th>
                                <th onClick={this.handleSort} thtype="rank">
                                    Rank
                                    {sort === 'rank' ? (
                                        <FontAwesomeIcon
                                            icon={
                                                orderAsc
                                                    ? 'arrow-down'
                                                    : 'arrow-up'
                                            }
                                        />
                                    ) : null}
                                </th>
                                <th onClick={this.handleSort} thtype="element">
                                    Attribute
                                    {sort === 'element' ? (
                                        <FontAwesomeIcon
                                            icon={
                                                orderAsc
                                                    ? 'arrow-down'
                                                    : 'arrow-up'
                                            }
                                        />
                                    ) : null}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
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

                                    if (
                                        !yokai.name.toLowerCase().includes(name)
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

                                    return aux;
                                })
                                .slice(0, (pageNumber + 1) * yokaisToShow)
                                .map(yokai => (
                                    <tr
                                        key={yokai.name + yokai.tribe}
                                        onClick={() =>
                                            this.goTo(yokai.name, yokai.tribe)
                                        }
                                        style={{
                                            background: `linear-gradient(to bottom, ${utils.getGradientColor(
                                                tribes,
                                                yokai.tribe
                                            )})`
                                        }}
                                    >
                                        <td>
                                            <div>
                                                <Image
                                                    imageUrl={yokai.image}
                                                    altText={yokai.name}
                                                    size="medium"
                                                    isThumbnail
                                                    isToLazyLoad
                                                />
                                                {yokai.name}
                                            </div>
                                        </td>
                                        <td>
                                            <Image
                                                imageUrl={utils.getImage(
                                                    tribes,
                                                    yokai.tribe
                                                )}
                                                altText={yokai.tribe}
                                                size="small"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                                imageUrl={utils.getImage(
                                                    ranks,
                                                    yokai.rank
                                                )}
                                                altText={yokai.rank}
                                                size="small"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                                imageUrl={utils.getImage(
                                                    elements,
                                                    yokai.element
                                                )}
                                                altText={yokai.element}
                                                size="small"
                                            />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </form>
            </Container>
        );
    }
}

export default withRouter(Main);
