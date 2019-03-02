/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Container from './style';

const getHeader = gameVersion => {
    if (document.location.hash.match(`/yokai-watch-${gameVersion}/`))
        return document.location.hash
            .split('/')[2]
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('_boss', '');
    return 'Yokaidex';
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkTo: '/'
        };
    }

    componentWillReceiveProps(nextProps) {
        const { location, gameVersion } = this.props;
        const locationChanged = nextProps.location !== location;

        if (
            locationChanged &&
            !location.pathname.match(`/yokai-watch-${gameVersion}/`)
        ) {
            this.setState({
                linkTo: location.pathname
            });
        } else {
            this.setState({
                linkTo: '/'
            });
        }
    }

    render() {
        const { onSetSidebarOpen, gameVersion } = this.props;
        const { linkTo } = this.state;

        return (
            <Container>
                {document.location.hash.match(
                    `/yokai-watch-${gameVersion}/`
                ) ? (
                    <div>
                        <Link to={linkTo}>
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                    </div>
                ) : (
                    <div role="presentation" onClick={onSetSidebarOpen}>
                        <FontAwesomeIcon icon="bars" />
                    </div>
                )}
                <div>
                    <h1>{getHeader(gameVersion)}</h1>
                </div>
            </Container>
        );
    }
}

export default withRouter(Header);
