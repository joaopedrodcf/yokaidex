import React, { useContext } from 'react';
import ReactSidebar from 'react-sidebar';
import SCSidebar from './Sidebar';
import { SidebarContext } from '../../store';

const styles = {
    sidebar: { background: 'white', position: 'fixed' },
    root: {
        overflow: 'initial',
    },
    content: {
        overflowY: 'initial',
    },
};

const sidebar = <SCSidebar />;

// TODO: Can't be memo cause it receives children
const Sidebar = ({ children }) => {
    const { isSidebarOpen, handleSidebarOpen } = useContext(SidebarContext);

    return (
        <ReactSidebar
            sidebar={sidebar}
            open={isSidebarOpen}
            onSetOpen={handleSidebarOpen}
            styles={styles}
        >
            {children}
        </ReactSidebar>
    );
};

export default Sidebar;
