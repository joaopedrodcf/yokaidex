import React from 'react';
import { Link } from 'react-router-dom';
import { SCSidebar, SCHeader, Container } from './style';

const Sidebar = () => (
    <SCSidebar>
        <SCHeader />
        <Container>
            <Link to="/home">
                <h5>Home</h5>
            </Link>
            <Link to="/">
                <h5>Change game version</h5>
            </Link>
            <Link to="/baffle-board">
                <h5>Baffle board</h5>
            </Link>
        </Container>
    </SCSidebar>
);

export default Sidebar;
