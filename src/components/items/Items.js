import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Sections,
    STable,
    STableText,
    ContainerHeader
} from './style';
import Image from '../shared/image';

import SCInput from '../shared/input';

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleText = this.handleText.bind(this);
    }

    handleText(event) {
        this.setState({ name: event.target.value.toLowerCase() });
    }

    render() {
        const { items, gameVersion, type } = this.props;
        const { name } = this.state;
        return (
            <Container>
                <ContainerHeader>
                    <SCInput
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.handleText}
                        placeholder="Find by name"
                    >
                        <FontAwesomeIcon icon="search" />
                    </SCInput>
                </ContainerHeader>
                {items
                    .filter(item => {
                        const aux = true;

                        if (!item.name.toLowerCase().includes(name)) {
                            return false;
                        }

                        return aux;
                    })
                    .map((item, index) => (
                        <Sections key={index}>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${type}/${
                                    item.name
                                }`}
                            >
                                <STable>
                                    <Image
                                        imageUrl={item.image}
                                        altText={item.name}
                                        size="medium"
                                    />
                                    <STableText>{item.name}</STableText>
                                </STable>
                            </Link>
                        </Sections>
                    ))}
            </Container>
        );
    }
}

export default Items;
