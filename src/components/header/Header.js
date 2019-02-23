/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Container from './style';

const getHeader = () => {
    if (document.location.hash.match('/yokai/'))
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
            linkTo: '/home'
        };
    }

    componentWillReceiveProps(nextProps) {
        const { location } = this.props;
        const locationChanged = nextProps.location !== location;

        if (locationChanged && !location.pathname.match('/yokai/')) {
            this.setState({
                linkTo: location.pathname
            });
        } else {
            this.setState({
                linkTo: '/home'
            });
        }
    }

    render() {
        const { onSetSidebarOpen } = this.props;
        const { linkTo } = this.state;

        return (
            <Container>
                {document.location.hash.match('yokai') ? (
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
                    <h5>{getHeader()}</h5>
                </div>
            </Container>
        );
    }
}

export default withRouter(Header);
