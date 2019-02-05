/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';

import Filter from './Filter/Filter';
import Search from './Search/Search';
import Table from './Table/table';
import { yokais as yokaisJson } from '../../mocks';
import { Container } from '../Card/style';


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

        const tablePropsVars = {
            tribe,
            rank,
            element,
            name,
            sort,
            orderAsc,
            yokais
        };
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
                    <Table
                        tablePropsVars={tablePropsVars}
                        handleSort={this.handleSort}
                    />
                </form>
            </Container>
        );
    }
}

export default Main;
