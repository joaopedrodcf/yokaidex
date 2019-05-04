import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from 'react-feather/dist/icons/search';
import { Helmet } from 'react-helmet';
import {
    Section,
    SectionWrapper,
    SectionText,
    InputContainer,
    InputContainerWrap
} from './style';
import Image from '../../components/shared/image';
import SCInput from '../../components/shared/input';
import utils from '../../components/utils';
import {
    withGameVersionContext,
    withItemsContext,
    withFilterItemsContext
} from '../../store';
import { items as itemsFilters } from '../../mocks/filters';
import Checkbox from '../../components/shared/checkbox';
import Global from '../../styles';

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 0,
            itemsToShow: 15
        };

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
            this.listref.current.clientHeight - 400
        ) {
            this.setState({ pageNumber: pageNumber + 1 });
        }
    }

    render() {
        const { pageNumber, itemsToShow } = this.state;
        const { context } = this.props;
        // To improve add fiters by type of item

        return (
            <Global.Container ref={this.listref}>
                <Helmet>
                    <title>
                        Items | Yokaidex - Where you can find all the
                        information from Yo-kai Watch games!
                    </title>
                    <meta
                        name="description"
                        content={`Items that can be collected in Yo-kai Watch ${
                            context.gameVersion
                        }`}
                    />
                </Helmet>
                <SCInput
                    id="name"
                    name="name"
                    value={context.name}
                    onChange={context.handleText}
                    placeholder="Find by name"
                >
                    <Search />
                </SCInput>
                <InputContainerWrap>
                    {itemsFilters.map(item => (
                        <InputContainer key={item}>
                            <label>
                                <Checkbox
                                    type="checkbox"
                                    checked={context.item.includes(
                                        item.toLowerCase()
                                    )}
                                    name={item}
                                    onChange={context.handleCheckbox}
                                    label={item}
                                />
                            </label>
                        </InputContainer>
                    ))}
                </InputContainerWrap>

                {context.items
                    .filter(item => {
                        let aux = true;

                        const filters = {
                            item: context.item
                        };

                        if (!item.name.toLowerCase().includes(context.name)) {
                            return false;
                        }

                        Object.keys(filters).forEach(type => {
                            if (
                                filters[type].length > 0 &&
                                !filters[type].includes(item.type.toLowerCase())
                            ) {
                                aux = false;
                            }
                        });

                        return aux;
                    })
                    .slice(0, (pageNumber + 1) * itemsToShow)
                    .map((item, index) => (
                        <Section key={index}>
                            <Link
                                to={`/yokai-watch-${
                                    context.gameVersion
                                }/items/${utils.uniformizeNames(item.name)}/`}
                            >
                                <SectionWrapper>
                                    <Image
                                        imageUrl={item.image}
                                        altText={item.name}
                                        size="medium"
                                        isToLazyLoad
                                    />
                                    <SectionText>{item.name}</SectionText>
                                </SectionWrapper>
                            </Link>
                        </Section>
                    ))}
            </Global.Container>
        );
    }
}

export default withGameVersionContext(
    withItemsContext(withFilterItemsContext(Items))
);
