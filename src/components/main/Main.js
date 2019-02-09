/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    Container,
    Filters,
    Table,
    InputContainer,
    Collapsible
} from './style';
import Button from '../shared/button';
import Image from '../shared/image';
import utils from '../utils';
import { elements, ranks, tribes } from '../../mocks';
import yokaisGame1 from '../../mocks/yokai-watch-1/yokais';
import yokaisGame2 from '../../mocks/yokai-watch-2/yokais';
import yokaisGame3 from '../../mocks/yokai-watch-3/yokais';
import Checkbox from '../shared/checkbox';

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
            yokais: yokaisGame1,
            isCollapsed: true
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    componentDidMount() {
        const { gameVersion } = this.props;
        let yokais;

        switch (gameVersion) {
            case '1':
                yokais = yokaisGame1;
                break;
            case '2':
                yokais = yokaisGame2;
                break;
            default:
                yokais = yokaisGame3;
                break;
        }

        this.setState({ yokais });
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
            [filterType]: filterType
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

    render() {
        const {
            tribe,
            rank,
            element,
            name,
            sort,
            orderAsc,
            yokais,
            isCollapsed
        } = this.state;
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
                <form>
                    <label htmlFor="name">
                        <h2>Find your yo-kai</h2>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleText}
                    />
                    <div>
                        <h2>Filter</h2>
                    </div>
                    <div>
                        <Button
                            type="button"
                            onClick={this.handleResetFilter}
                            label="
                            Reset Filters"
                        >
                            <FontAwesomeIcon icon="trash-alt" />
                        </Button>
                    </div>
                    <Filters>
                        <Collapsible isCollapsed={this.state.isCollapsed}>
                            <Button
                                onClick={this.handleCollapse}
                                type="button"
                                label="Tribes"
                            >
                                <FontAwesomeIcon
                                    icon={
                                        isCollapsed
                                            ? 'chevron-down'
                                            : 'chevron-up'
                                    }
                                />
                            </Button>
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
                        </Collapsible>
                        <Collapsible isCollapsed={this.state.isCollapsed}>
                            <Button
                                onClick={this.handleCollapse}
                                type="button"
                                label="Ranks"
                            >
                                <FontAwesomeIcon
                                    icon={
                                        isCollapsed
                                            ? 'chevron-down'
                                            : 'chevron-up'
                                    }
                                />
                            </Button>
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
                        </Collapsible>
                        <Collapsible isCollapsed={this.state.isCollapsed}>
                            <Button
                                onClick={this.handleCollapse}
                                type="button"
                                label="Attributes"
                            >
                                <FontAwesomeIcon
                                    icon={
                                        isCollapsed
                                            ? 'chevron-down'
                                            : 'chevron-up'
                                    }
                                />
                            </Button>
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
                        </Collapsible>
                    </Filters>
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
