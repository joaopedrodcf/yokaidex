import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { Container, Section, SectionWrapper, SectionText } from './style';
import Image from '../shared/image';
import SCInput from '../shared/input';

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            pageNumber: 0,
            itemsToShow: 15
        };

        this.handleText = this.handleText.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.listref = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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

    handleText(event) {
        this.setState({ name: event.target.value.toLowerCase() });
    }

    render() {
        const { items, gameVersion, type } = this.props;
        const { name, pageNumber, itemsToShow } = this.state;
        return (
            <Container ref={this.listref}>
                <Helmet>
                    <title>
                        Items | Yokaidex - Where you can find all the
                        information from Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content={`Items that can be collected in Yo-kai Watch ${gameVersion}`}
                    />
                </Helmet>
                <SCInput
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleText}
                    placeholder="Find by name"
                >
                    <FontAwesomeIcon icon="search" />
                </SCInput>
                {items
                    .filter(item => {
                        const aux = true;

                        if (!item.name.toLowerCase().includes(name)) {
                            return false;
                        }

                        return aux;
                    })
                    .slice(0, (pageNumber + 1) * itemsToShow)
                    .map((item, index) => (
                        <Section key={index}>
                            <Link
                                to={`/yokai-watch-${gameVersion}/${type}/${
                                    item.name
                                }`}
                            >
                                <SectionWrapper>
                                    <Image
                                        imageUrl={item.image}
                                        altText={item.name}
                                        size="medium"
                                    />
                                    <SectionText>{item.name}</SectionText>
                                </SectionWrapper>
                            </Link>
                        </Section>
                    ))}
            </Container>
        );
    }
}

export default Items;
