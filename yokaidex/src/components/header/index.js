import React, { useContext } from 'react';
import Menu from 'react-feather/dist/icons/menu';
import { Wrapper } from './style';
import { SidebarContext } from '../../store';

const Header = () => {
    const { handleSidebarOpen } = useContext(SidebarContext);

    return (
        <Wrapper>
            <div role="presentation" onClick={handleSidebarOpen}>
                <Menu />
            </div>
            <div>
                <h1>Yokaidex</h1>
            </div>
        </Wrapper>
    );
};

export default Header;
