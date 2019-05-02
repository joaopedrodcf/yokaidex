import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import {
    Container,
    SpecialDiv,
    ProgressBar,
    Bar,
    Label,
    Sections,
    Moves,
    MovesTitle,
    MovesText,
    STable,
    STableTitle,
    STableText,
    SLabel,
    SLabelText,
    ContainerSeal,
    SealElements
} from './style';
import { elements, foods, ranks, tribes, legendarys } from '../../mocks';
import Image from '../../components/shared/image';
import utils from '../../components/utils';
import Evolution from '../../components/evolution';
import maxStats from '../../mocks/max-stats';
import { withGameVersionContext, withYokaisContext } from '../../store';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yokai: undefined
        };

        this.fetchYokai = this.fetchYokai.bind(this);
    }

    componentDidMount() {
        this.fetchYokai();
    }

    componentDidUpdate(prevProps) {
        // eslint-disable-next-line
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.fetchYokai();
        }
    }

    fetchYokai() {
        const { context, match } = this.props;

        this.setState({
            yokai: context.getYokai(match.params.name)
        });
    }

    render() {
        const { context } = this.props;
        const { yokai } = this.state;

        return (
            <>
                {yokai && (
                    <Container>
                        <Helmet>
                            <title>{`${
                                yokai.name
                            } | Yokaidex - Where you can find all the information from Yo-kai Watch games!`}</title>
                            <meta
                                name="description"
                                content={`${yokai.name} is a yo-kai from ${
                                    yokai.tribe
                                } tribe, of the rank ${
                                    yokai.rank
                                } and with the attribute ${
                                    yokai.element
                                } in Yo-kai Watch ${context.gameVersion}`}
                            />
                            <meta name="og:image" content={yokai.image} />
                        </Helmet>
                        <Image
                            imageUrl={yokai.image}
                            altText={yokai.name}
                            size="large"
                        />
                        <SpecialDiv>
                            <h2>#{yokai.yokaiNumber}</h2>
                            <Image
                                imageUrl={utils.getImage(ranks, yokai.rank)}
                                altText={yokai.rank}
                                size="small"
                            />
                        </SpecialDiv>

                        <Sections isRow justifyContent="space-evenly">
                            <SLabel
                                backgroundColor={utils.getColor(
                                    tribes,
                                    yokai.tribe
                                )}
                            >
                                <SLabelText>
                                    <Image
                                        imageUrl={utils.getImage(
                                            tribes,
                                            yokai.tribe
                                        )}
                                        altText={yokai.tribe}
                                        size="small"
                                    />
                                </SLabelText>
                                <SLabelText>{yokai.tribe}</SLabelText>
                            </SLabel>

                            {yokai.tribe !== 'Boss' && (
                                <SLabel
                                    backgroundColor={utils.getColor(
                                        elements,
                                        yokai.element
                                    )}
                                    color={utils.getSecondaryColor(
                                        elements,
                                        yokai.element
                                    )}
                                >
                                    <SLabelText>
                                        <Image
                                            imageUrl={utils.getImage(
                                                elements,
                                                yokai.element
                                            )}
                                            altText={yokai.element}
                                            size="small"
                                        />
                                    </SLabelText>
                                    <SLabelText>{yokai.element}</SLabelText>
                                </SLabel>
                            )}
                        </Sections>

                        <Sections>
                            <STable>
                                <STableTitle
                                    color={utils.getColor(tribes, yokai.tribe)}
                                >
                                    Bio
                                </STableTitle>
                                <STableText bold>
                                    {yokai.description}
                                </STableText>
                            </STable>
                        </Sections>

                        {yokai.tribe !== 'Boss' && (
                            <>
                                <Sections>
                                    <STable>
                                        <STableTitle
                                            color={utils.getColor(
                                                tribes,
                                                yokai.tribe
                                            )}
                                        >
                                            Favourite food
                                        </STableTitle>
                                        <STableText>
                                            <Image
                                                imageUrl={utils.getImage(
                                                    foods,
                                                    yokai.favouriteFood
                                                )}
                                                altText={yokai.favouriteFood}
                                                size="special"
                                            />
                                            {yokai.favouriteFood}
                                        </STableText>
                                    </STable>
                                </Sections>

                                <Sections>
                                    <STable>
                                        <STableTitle
                                            color={utils.getColor(
                                                tribes,
                                                yokai.tribe
                                            )}
                                        >
                                            Locations
                                        </STableTitle>
                                        <STableText>
                                            {yokai.locations.map(
                                                (location, index) => (
                                                    <div key={index}>
                                                        {location}
                                                    </div>
                                                )
                                            )}
                                        </STableText>
                                    </STable>
                                </Sections>

                                {yokai.evolutionIndexes && (
                                    <Sections>
                                        <Label
                                            color={utils.getColor(
                                                tribes,
                                                yokai.tribe
                                            )}
                                        >
                                            Evolution
                                        </Label>
                                        <Evolution
                                            gameVersion={context.gameVersion}
                                            evolutionIndexes={
                                                yokai.evolutionIndexes
                                            }
                                            tribe={yokai.tribe}
                                        />
                                    </Sections>
                                )}

                                {yokai.seal !== undefined && (
                                    <Sections>
                                        <Label
                                            color={utils.getColor(
                                                tribes,
                                                yokai.tribe
                                            )}
                                        >
                                            Yokai seal
                                        </Label>

                                        <ContainerSeal>
                                            {legendarys[
                                                yokai.seal
                                            ].yokaisToUnlock.map(
                                                yokaiToUnlock => (
                                                    <SealElements>
                                                        <Link
                                                            to={`/yokai-watch-${
                                                                context.gameVersion
                                                            }/yokais/${utils.uniformizeNames(
                                                                yokaiToUnlock.name
                                                            )}`}
                                                        >
                                                            <Image
                                                                imageUrl={
                                                                    yokaiToUnlock.image
                                                                }
                                                                altText=""
                                                                size="medium"
                                                            />
                                                            {yokaiToUnlock.name}
                                                        </Link>
                                                    </SealElements>
                                                )
                                            )}
                                        </ContainerSeal>
                                    </Sections>
                                )}

                                <Sections>
                                    <Label
                                        color={utils.getColor(
                                            tribes,
                                            yokai.tribe
                                        )}
                                    >
                                        Moves
                                    </Label>
                                    <Moves color="#e1bee7">
                                        <div>
                                            <MovesTitle color="#7b1fa2">
                                                Skill
                                            </MovesTitle>
                                            <MovesText bold>
                                                {yokai.skill.name}
                                            </MovesText>
                                            <MovesText>
                                                {yokai.skill.description}
                                            </MovesText>
                                        </div>
                                    </Moves>
                                    <Moves color="#fff176">
                                        <div>
                                            <MovesTitle color="#f57f17">
                                                Attack
                                            </MovesTitle>
                                            <MovesText bold>
                                                {yokai.attack.name}
                                            </MovesText>
                                        </div>
                                        <MovesText>
                                            <Image
                                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/attack.png"
                                                altText="attack"
                                                size="small"
                                            />
                                            {yokai.attack.power}
                                        </MovesText>
                                    </Moves>
                                    <Moves color="#b3e5fc">
                                        <div>
                                            <MovesTitle color="#0277bd">
                                                Technique
                                            </MovesTitle>
                                            <MovesText bold>
                                                {yokai.technique.name}
                                            </MovesText>
                                        </div>
                                        <MovesText>
                                            <Image
                                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/technique.png"
                                                altText="attack"
                                                size="small"
                                            />
                                            {yokai.technique.power}
                                        </MovesText>
                                    </Moves>
                                    <Moves color="#ef9a9a">
                                        <div>
                                            <MovesTitle color="#c62828">
                                                Soultime
                                            </MovesTitle>
                                            <MovesText bold>
                                                {yokai.soultime.name}
                                            </MovesText>
                                            <MovesText>
                                                {yokai.soultime.description}
                                            </MovesText>
                                        </div>
                                        <MovesText>
                                            <Image
                                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/soultime.png"
                                                altText="attack"
                                                size="small"
                                            />
                                            {yokai.soultime.power}
                                        </MovesText>
                                    </Moves>
                                    <Moves color="#f8bbd0">
                                        <div>
                                            <MovesTitle color="#d81b60">
                                                Inspirit
                                            </MovesTitle>
                                            <MovesText bold>
                                                {yokai.inspirit.name}
                                            </MovesText>
                                            <MovesText>
                                                {yokai.inspirit.description}
                                            </MovesText>
                                        </div>
                                        <MovesText>
                                            <Image
                                                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1549121429/Yokai/info/inspirit.png"
                                                altText="attack"
                                                size="small"
                                            />
                                            {yokai.inspirit.power}
                                        </MovesText>
                                    </Moves>
                                </Sections>

                                <Sections>
                                    <Label
                                        color={utils.getColor(
                                            tribes,
                                            yokai.tribe
                                        )}
                                    >
                                        Stats
                                    </Label>
                                    {Object.entries(yokai.stats).map(
                                        ([stat, value]) => (
                                            <ProgressBar key={stat}>
                                                <div>{stat}</div>
                                                <div>{value}</div>
                                                <Bar>
                                                    <div
                                                        style={{
                                                            width: utils.calculatePercentage(
                                                                value,
                                                                maxStats.find(
                                                                    aux =>
                                                                        aux.name ===
                                                                        stat
                                                                ).max
                                                            ),
                                                            backgroundColor: maxStats.find(
                                                                aux =>
                                                                    aux.name ===
                                                                    stat
                                                            ).color
                                                        }}
                                                    />
                                                </Bar>
                                            </ProgressBar>
                                        )
                                    )}
                                </Sections>
                            </>
                        )}
                    </Container>
                )}
            </>
        );
    }
}

export default withRouter(withGameVersionContext(withYokaisContext(Card)));
