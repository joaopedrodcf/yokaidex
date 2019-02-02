/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Container, Table } from './style';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import Image from '../shared/image';
import utils from '../utils';
import { elements, yokais as yokaisJson, ranks, tribes } from '../../mocks';

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
            yokais: yokaisJson,
            isCollapsed: true
        };

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
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
        const checkboxtype = event.target.getAttribute('checkboxtype');
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
        const filterPropsVars = {
            isCollapsed,
            tribe,
            rank,
            element
        };
        return (
            <Container>
                <form>
                    <Search handleText={this.handleText} name={this.name} />
                    <Filter
                        handleCollapse={this.handleCollapse}
                        handleCheckbox={this.handleCheckbox}
                        propsVars={filterPropsVars}
                    />
                    <Table>
                        <thead>
                            <tr>
                                <th onClick={this.handleSort} thtype="name">
                                    Name{' '}
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
                                            <Image
                                                imageUrl={yokai.image}
                                                altText={yokai.name}
                                                size="medium"
                                                isThumbnail
                                            />
                                            {yokai.name}
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

export default Main;
