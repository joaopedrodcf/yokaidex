import React from 'react';
import { Link } from 'react-router-dom';
import { SCSidebar, SCHeader, Container } from './style';

const Sidebar = () => (
    <SCSidebar>
        <SCHeader />
        <Container>
            <Link to="/">
                <h5>Home</h5>
            </Link>
            <Link to="/fish">
                <h5>Fish location</h5>
            </Link>
            <Link to="/bugs">
                <h5>Bugs location</h5>
            </Link>
            <Link to="/baffle-board">
                <h5>Baffle board</h5>
            </Link>
            <Link to="/password-list">
                <h5>Password list</h5>
            </Link>
        </Container>
    </SCSidebar>
);

export default Sidebar;
